'use server'

import {  signIn, signOut } from '@/auth'
import { IUserSignIn } from '@/types'
import { redirect } from 'next/navigation'

// SignInWithCredentials
export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn('credentials', { ...user, redirect: false })
}

// SignInWithGoogle
export const SignInWithGoogle = async () => {
  await signIn('google')
}

// SignOut
export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false })
  redirect(redirectTo.redirect)
}

