# Weather Application - Frontend Developer Test

A modern weather application built with Next.js that displays current weather and 5-day forecast data using the OpenWeather API.

## Features

- Current weather display with temperature, description, humidity, and wind speed
- 5-day forecast with 3-hour intervals
- Search functionality with history
- Responsive design
- Modern UI with loading states and error handling

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
cd weather-app
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
OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5
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
├── app/                  # Next.js app router pages
├── components/          # React components
├── store/              # Zustand store configurations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and API calls
```

## Evaluation Criteria

The project will be evaluated based on:

1. **Feature Completeness**
   - Current weather summary
   - 5-day forecast by 3 hours
   - Search & history functionality

2. **Code Quality**
   - Clean, maintainable code
   - Proper TypeScript usage
   - Component organization
   - Error handling

3. **UI/UX**
   - Responsive design
   - Loading states
   - Error states
   - User-friendly interface

4. **Best Practices**
   - API key security
   - Performance optimization
   - Code documentation
   - Git commit history

## API Rate Limits

Please note that the free tier of OpenWeather API has rate limits. Refer to their [documentation](https://openweathermap.org/price) for more details.

## License

This project is part of a technical assessment and is not licensed for public use.
