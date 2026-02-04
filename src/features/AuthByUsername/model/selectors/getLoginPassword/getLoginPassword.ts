import { StateSchema } from '@/app/providers/storeProvider';

export const getLoginPassword = (state: StateSchema): string => state.loginForm?.password || '';
