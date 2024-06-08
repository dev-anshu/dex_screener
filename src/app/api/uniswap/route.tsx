import { NextResponse } from 'next/server';
import query from '@/lib/graphqlSchema';


export async function GET() {
    try {
        const response = await fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
