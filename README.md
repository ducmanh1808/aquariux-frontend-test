# Weather Application - Frontend Developer Test

A modern weather application built with Next.js that displays current weather and 5-day forecast data using the OpenWeather API.

## Features

- Current weather display with temperature, description, humidity, and wind speed
- 5-day forecast with 3-hour intervals
- Search functionality with history
- Responsive design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Query
- Zustand (State Management)
- OpenWeather API

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory by copying `.env.example`:
```bash
cp .env.example .env.local
```
Then replace the placeholder with your OpenWeather API key:
```
OPENWEATHER_API_KEY=your_api_key_here
```

> **Important**: 
> - You must obtain your own API key from [OpenWeather](https://openweathermap.org/api). The application will not work without a valid API key.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # React components
├── container/          # Page containers
├── store/              # Zustand store configurations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and API calls
```
