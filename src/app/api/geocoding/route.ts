import { NextRequest, NextResponse } from 'next/server';
import { API_KEY, GEO_URL } from '@/constants/common';
import { WeatherAPIError } from '@/types/api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const limit = searchParams.get('limit') || '5';

  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 },
    );
  }

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `${GEO_URL}/direct?q=${encodeURIComponent(query)}&limit=${limit}&appid=${API_KEY}`,
    );

    if (!response.ok) {
      const errorBody = await response.json();

      throw {
        message: errorBody?.message || 'Failed to fetch geocoding data',
        status: response.status,
      } as WeatherAPIError;
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const apiError = error as WeatherAPIError;
    return NextResponse.json(
      { error: apiError.message || 'Failed to fetch geocoding data' },
      { status: apiError.status || 500 },
    );
  }
}
