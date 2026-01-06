import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const regionId = searchParams.get('regionId');

    if (!regionId) {
      return NextResponse.json(
        { error: 'regionId parameter is required' },
        { status: 400 }
      );
    }

    // Fetch districts for the specified region
    const districts = await query<{
      id: number;
      region_id: number;
      name: string;
      status: number;
      created_at: string;
      updated_at: string;
    }>(
      'SELECT id, region_id, name, status, created_at, updated_at FROM districts WHERE region_id = ? AND status = 1 ORDER BY name ASC',
      [regionId]
    );

    return NextResponse.json({ districts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching districts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch districts', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

