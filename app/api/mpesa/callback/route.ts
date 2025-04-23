// -----------------------------
// app/api/mpesa/callback/route.ts
// -----------------------------
import { NextResponse } from 'next/server'
import MpesaTransaction from '@/lib/db/models/mpesa.model'
import { validateCallback } from '@/lib/payments/mpesa/validateCallback'
import { connectToDatabase } from '@/lib/db'



export async function POST(req: Request) {
  await connectToDatabase()
  const body = await req.json()

  const parsed = validateCallback(body)
 
  // You might want to save the result to DB here
  await MpesaTransaction.create({
    ...parsed,
    resultCode: parsed.resultCode,
    transactionDate: parsed.transactionDate,
  })

  return NextResponse.json({ message: 'Callback received' })
}