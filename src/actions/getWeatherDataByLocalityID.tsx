"use server"

export const fetchWeatherDataByLocalityId = async (localityId:any) => {


    if (!localityId) {
        // console.log("this is the localityId from throw new error page", localityId);
        throw new Error("Locality ID is required");
    }

    const apiKey = process.env.ZOMATO_API_KEY;  // Replace with your actual API key
    const apiUrl = `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`;
    // console.log("this is the localityId", localityId);
    // console.log("this is the apiUrl", apiUrl);
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-Zomato-Api-Key': apiKey,  
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


