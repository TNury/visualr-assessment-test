'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function storeCookie(name: string, value: any): Promise<void> {
  const stringifiedValue: string = JSON.stringify(value);

  cookies().set(name, stringifiedValue, {
    path: '/',
    maxAge: 86400, // 24 hours
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  revalidatePath('/');
}

export async function retrieveCookie(name: string): Promise<any> {
  const storedCookie = cookies().get(name);

  if (storedCookie) {
    if (storedCookie.value) {
      return JSON.parse(storedCookie.value);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export async function deleteCookie(name: string) {
  cookies().set(name, '', {
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
}
