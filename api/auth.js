import { post } from './client';

// 인증관련 API

export async function login(email, password) {
  return await post('/api/v1/auth', {email, password});
}
