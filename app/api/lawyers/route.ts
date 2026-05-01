import { NextRequest, NextResponse } from 'next/server';
import type { IncidentCategory, Lawyer } from '@/lib/types';

const LAWYERS: Lawyer[] = [
  {
    id: 'l1',
    name: 'Sarah Mitchell',
    firm: 'Mitchell Housing Law',
    specialisms: ['tenancy', 'property-damage'],
    location: 'London',
    phone: '020 7946 0001',
    email: 'sarah@mitchellhousing.co.uk',
    website: 'https://mitchellhousing.co.uk',
  },
  {
    id: 'l2',
    name: 'James Okafor',
    firm: 'Okafor Employment Solicitors',
    specialisms: ['employment'],
    location: 'Manchester',
    phone: '0161 946 0002',
    email: 'james@okaforlaw.co.uk',
    website: 'https://okaforlaw.co.uk',
  },
  {
    id: 'l3',
    name: 'Priya Sharma',
    firm: 'Sharma Civil Litigation',
    specialisms: ['contract-service', 'general-civil'],
    location: 'Birmingham',
    phone: '0121 946 0003',
    email: 'priya@sharmalaw.co.uk',
    website: 'https://sharmalaw.co.uk',
  },
  {
    id: 'l4',
    name: 'David Chen',
    firm: 'Chen Road Traffic Solicitors',
    specialisms: ['motor-accident'],
    location: 'Leeds',
    phone: '0113 946 0004',
    email: 'david@chenroadtraffic.co.uk',
    website: 'https://chenroadtraffic.co.uk',
  },
  {
    id: 'l5',
    name: 'Emma Williams',
    firm: 'Williams & Partners',
    specialisms: ['tenancy', 'property-damage', 'general-civil'],
    location: 'Bristol',
    phone: '0117 946 0005',
    email: 'emma@williamspartners.co.uk',
    website: 'https://williamspartners.co.uk',
  },
];

export async function GET(request: NextRequest): Promise<NextResponse<Lawyer[]>> {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') as IncidentCategory | null;

  if (!category) {
    return NextResponse.json(LAWYERS);
  }

  const filtered = LAWYERS.filter(l => l.specialisms.includes(category));
  return NextResponse.json(filtered.length > 0 ? filtered : LAWYERS);
}
