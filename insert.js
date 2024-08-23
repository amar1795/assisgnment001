
// file to convert the data from text file to json file
const fs = require('fs');
const path = require('path');
const readline = require('readline');
require('dotenv').config(); // Ensure dotenv is required to read the .env file

const filePath = path.join(__dirname, './data2.txt'); // Path to your text file
const outputFilePath = path.join(__dirname, './convert.json'); // Path to output JSON file

async function main() {
  const results = [];
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isFirstLine = true; // Flag to skip the header line

  for await (const line of rl) {
    if (isFirstLine) {
      isFirstLine = false; // Skip header line
      continue;
    }

    // Log the line being processed for debugging
    console.log(`Processing line: ${line}`);

    // Use regular expression to parse the line
    const regex = /^(.+?)\s+(.+?)\s+(\S+)\s+([\d.]+)\s+([\d.]+)\s+(.+)$/;
    const match = line.match(regex);

    if (!match) {
      console.error(`Line format error: ${line}`);
      continue;
    }

    // Extract the data from the match groups
    const [_, cityName, localityName, localityId, latitudeStr, longitudeStr, deviceType] = match;

    // Parse latitude and longitude to numbers
    const latitude = parseFloat(latitudeStr);
    const longitude = parseFloat(longitudeStr);

    if (isNaN(latitude) || isNaN(longitude)) {
      console.error(`Invalid coordinates: Latitude (${latitudeStr}), Longitude (${longitudeStr})`);
      continue;
    }

    // Create a JSON object for each line
    const station = {
      cityName: cityName.trim(),
      localityName: localityName.trim(),
      localityId: localityId.trim(),
      latitude,
      longitude,
      device_type: deviceType.trim(), // Remove any leading/trailing whitespace
    };

    results.push(station);
  }

  console.log('Text file successfully processed');

  // Write JSON data to a file named convert.json
  fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Data written to ${outputFilePath}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
