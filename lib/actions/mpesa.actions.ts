// ------------------------
// actions/mpesa.actions.ts
// ------------------------
'use server'

//import { MpesaInputSchema } from '@/lib/validator/mpesa.validator'
import { MpesaInputSchema } from '../validator'
import MpesaTransaction from '../db/models/mpesa.model'
import { connectToDatabase } from '@/lib/db'
import { auth } from '@/auth'
import { formatError } from '@/lib/utils'


export const createMpesaTransaction = async (input: unknown) => {
  try {
    await connectToDatabase()

    const session = await auth()
    if (!session) throw new Error('Not authenticated')

    const parsed = MpesaInputSchema.parse(input)
    const transaction = await MpesaTransaction.create({
      ...parsed,
      mpesaReceiptNumber: parsed.mpesaReceiptNumber,
      transactionDate: new Date().toISOString(),
      resultCode: 0,
    })

    return {
      success: true,
      message: 'Mpesa transaction created successfully',
      data: transaction,
    }
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    }
  }
}