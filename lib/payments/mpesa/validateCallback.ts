// lib/validateCallback.ts

import {
  extractAmount,
  extractPhone,
  extractTransactionDate,
} from "@/lib/utils";
import type { MpesaCallback } from "@/types/mpesa";

export function validateCallback(data: MpesaCallback): {
  resultCode: number;
  resultDesc: string;
  checkoutRequestID: string;
  amount: number;
  phone: string;
  transactionDate: string;
} {
  return {
    resultCode: data.Body.stkCallback.ResultCode,
    resultDesc: data.Body.stkCallback.ResultDesc,
    checkoutRequestID: data.Body.stkCallback.CheckoutRequestID,
    amount: extractAmount(data),
    phone: extractPhone(data),
    transactionDate: extractTransactionDate(data),
  };
}
