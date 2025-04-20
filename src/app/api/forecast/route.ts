import { NextRequest, NextResponse } from 'next/server';
import { API_KEY, API_URL } from '@/constants';
import { WeatherAPIError } from '@/types/api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!API_KEY) {
    return NextResponse.json({ error: 'API key is required' }, { status: 500 });
  }

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `${API_URL}/forecast?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      const errorBody = await response.json();
      throw {
        message: errorBody?.message || 'Failed to fetch forecast data',
        status: response.status,
      } as WeatherAPIError;
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const apiError = error as WeatherAPIError;
    return NextResponse.json(
      { error: apiError.message || 'Failed to fetch forecast data' },
      { status: apiError.status || 500 },
    );
  }
}
