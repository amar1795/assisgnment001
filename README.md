# Weather Application

This repository contains a weather application developed as part of a technical assignment for a company interview. The project demonstrates a modern web application built using Next.js, TypeScript, and various other technologies.

## Project Overview

The application provides weather-related information and leverages several advanced features and technologies:

- **Next.js** (latest version) for server-side rendering and static site generation.
- **Next.js Server Actions** for making API calls efficiently.
- **MongoDB** for storing location names, converted from a provided PDF.
- **Prisma ORM** for MongoDB interactions.
- **Tailwind CSS** for responsive and modern styling.
- **Heroicons** for icons.
- **Redux Toolkit** for state management.
- **TypeScript** for type safety and improved development experience.
- **Debouncing** implemented in search functionality to optimize performance.

The application is designed to be highly responsive across all devices and is hosted on Vercel.

## Live Demo

You can view the live application here: [Weather Application](https://weather-delta-lilac.vercel.app/)

## Features

- **Dynamic Search**: Implemented debouncing for efficient search functionality.
- **Responsive Design**: Fully responsive layout optimized for various devices.
- **Location Data**: Location names are stored in MongoDB, providing quick access to weather data.
- **API Integration**: Utilizes Next.js server actions for seamless API communication.
- **State Management**: Redux Toolkit is used to manage application state effectively.
- **Modern Styling**: Tailwind CSS is used for a clean and responsive design.
- **Iconography**: Heroicons are used to enhance the user interface.

## Technologies Used

- **Next.js**: Latest version for server-side rendering and static site generation.
- **TypeScript**: For static typing and better development experience.
- **Next.js Server Actions**: For making API calls efficiently.
- **MongoDB**: Database for storing and managing location data.
- **Prisma ORM**: Object-Relational Mapping tool for MongoDB.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Heroicons**: Icon library for modern UI icons.
- **Redux Toolkit**: For managing global state.
- **Debouncing**: For optimizing search functionality.

## Getting Started

To get started with the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-application.git
   cd weather-application
2. **Install Dependencies: Install the necessary dependencies using:**:
   ```bash
  npm install

3. 1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-application.git
   cd weather-application
4. **Set Up Environment Variables: Create a .env.local file in the root directory and add your environment variables. Example:**
    MONGODB_URI=your_mongodb_uri
    NEXT_PUBLIC_API_URL=your_api_url
5. **Run the Development Server: Start the development server with:**:
    npm run dev

## Usage

- **Search Functionality**: Utilize the search bar to find location names. Debouncing is implemented to optimize search performance and reduce unnecessary API calls.
- **Navigation**: Use the responsive menu to navigate through different sections of the application seamlessly.
- **Icons**: Heroicons are used throughout the application to enhance visual elements and provide a modern user interface.

## Redux Slices

The application uses Redux Toolkit for state management. Key slices include:

- **Search Slice**: Handles the search value, suggestions, and dropdown visibility.
- **Details Slice**: Manages various pieces of information such as locality data, searched place name, background video, date and time, weather condition picture, search term, and loading state.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the Repository**: Create a personal copy of the repository on GitHub.
2. **Make Changes**: Implement your changes and ensure that you adhere to the project's coding standards.
3. **Submit a Pull Request**: Submit a pull request with a clear description of your changes and their benefits.
4. **Include Tests**: Add relevant tests to verify your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for checking out my project! I hope you find it interesting and well-crafted. Feel free to reach out if you have any questions or feedback!

