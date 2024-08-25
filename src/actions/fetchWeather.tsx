"use server";

import { PrismaClient } from '@prisma/client';
// import { prismadb } from '@/lib/db';
import { cache } from 'react';

const prismadb = new PrismaClient();

export const fetchAllWeatherStations = cache(async ({ page = 1, limit = 5, sortOrder = 'desc' }) => {
    const offset = (page - 1) * limit;  // Calculate offset

    try {
        // Fetch the total number of weather stations
        const totalWeatherStationsCount = await prismadb.weatherStation.count();

        // Calculate total number of pages
        const totalPages = Math.ceil(totalWeatherStationsCount / limit);

        // Fetch weather stations
        const weatherStations = await prismadb.weatherStation.findMany({
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

        // console.log('Weather stations fetched successfully', sanitizedWeatherStations);

        return sanitizedWeatherStations;
    } catch (error) {
        console.error("Error fetching weather stations:", error);
        throw new Error("Failed to fetch weather stations");
    } finally {
        await prismadb.$disconnect(); // Disconnect Prisma client
    }
});
