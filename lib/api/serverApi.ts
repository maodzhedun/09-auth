// lib/api/serverApi.ts

import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';

export const checkServerSession = async () => {
  // Get current cookies
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
      // Pass cookies on
      Cookie: cookieStore.toString(),
    },
  });
  // Return full response so middleware has access to new cookies
  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
