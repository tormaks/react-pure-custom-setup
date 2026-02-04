import { StateSchema } from '@/app/providers/storeProvider';

export const getLoginIsLoading = (state: StateSchema): boolean => state.loginForm?.isLoading || false;
