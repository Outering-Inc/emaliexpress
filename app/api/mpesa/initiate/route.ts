// -----------------------------
// app/api/mpesa/initiate/route.ts
// -----------------------------

import { initiateStkPush } from '@/lib/payments/mpesa/stkPush'
import { NextResponse } from 'next/server'


export async function POST(req: Request) {
  const body = await req.json()
  const { phone, amount } = body

  const response = await initiateStkPush({ phoneNumber: phone, amount })
  return NextResponse.json(response)
}