export const fetchWeatherDataByLocalityId = async (localityId) => {
    if (!localityId) {
        throw new Error("Locality ID is required");
    }

    const apiKey = 'cd256ecc8fb3b6cf2e0b8163edcbc9c5';  // Replace with your actual API key
    const apiUrl = `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Zomato-Api-Key': apiKey,  // Include the API key in the headers
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data by locality ID:", error);
        throw new Error("Failed to fetch weather data by locality ID");
    }
};
