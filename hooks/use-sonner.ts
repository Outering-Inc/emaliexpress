"use client"

import { toast as sonnerToast } from "sonner"

type ToastVariant = "default" | "success" | "error" | "info" | "warning" | "loading" | "destructive"

interface ToastOptions {
  description?: string
  duration?: number
  action?: React.ReactNode
  variant?: ToastVariant
}

export function useSonner() {
  const toast = ({ description, duration = 3000, action, variant = "default" }: ToastOptions) => {
    sonnerToast(variant === "destructive" ? "Error" : "Notice", {
      description,
      duration,
      ...(action && { action }),
    })
  }

  return {
    toast,
    success: (message: string, desc?: string) =>
      toast({ description: desc, variant: "success" }),
    error: (message: string, desc?: string) =>
      toast({ description: desc, variant: "error" }),
    info: (message: string, desc?: string) =>
      toast({ description: desc, variant: "info" }),
    warning: (message: string, desc?: string) =>
      toast({ description: desc, variant: "warning" }),
  }
}
