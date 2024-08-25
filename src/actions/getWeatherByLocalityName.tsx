"use server"
// import { prismadb } from '@/lib/db';
import { PrismaClient } from '@prisma/client';

import { cache } from 'react';
const prismadb = new PrismaClient();


export const fetchWeatherStationsByLocality = cache(async ({ localityName, page = 1, limit = 5, sortOrder = 'desc' }) => {
    if (!localityName) {
        throw new Error("Locality name is required");
    }

    const offset = (page - 1) * limit;  // Calculate offset

    try {
        // Fetch the total number of weather stations for the given localityName
        const totalWeatherStationsCount = await prismadb.weatherStation.count({
            where: {
                localityName: {
                    contains: localityName,  // Use contains for partial matching
                    mode: 'insensitive',     // Case insensitive search
                },
            },
        });

        // Calculate total number of pages
        const totalPages = Math.ceil(totalWeatherStationsCount / limit);

        // Fetch weather stations for the given localityName
        const weatherStations = await prismadb.weatherStation.findMany({
            where: {
                localityName: {
                    contains: localityName,  // Use contains for partial matching
                    mode: 'insensitive',     // Case insensitive search
                },
            },
            skip: offset,
            take: limit,
            orderBy: {
                cityName: sortOrder as 'asc' | 'desc',  // Sort by cityName field
            },
        });

        // Ensure latitude and longitude are not null
        const sanitizedWeatherStations = weatherStations.map(station => ({
            ...station,
            latitude: station.latitude ?? 0,  // Defaulting to 0 if latitude is null
            longitude: station.longitude ?? 0,  // Defaulting to 0 if longitude is null
            totalPages,
            totalWeatherStationsCount
        }));

        // console.log('Weather stations fetched successfully by locality', sanitizedWeatherStations);

        return sanitizedWeatherStations;
    } catch (error) {
        console.error("Error fetching weather stations by locality:", error);
        throw new Error("Failed to fetch weather stations by locality");
    } finally {
        await prismadb.$disconnect(); // Disconnect Prisma client
    }
});
