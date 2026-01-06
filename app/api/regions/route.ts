import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    // Fetch all active regions from the database
    const regions = await query<{
      id: number;
      name: string;
      status: number;
      created_at: string;
      updated_at: string;
    }>('SELECT id, name, status, created_at, updated_at FROM regions WHERE status = 1 ORDER BY name ASC');

    return NextResponse.json({ regions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching regions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch regions', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

