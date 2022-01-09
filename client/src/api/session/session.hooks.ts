import useAxios from 'axios-hooks';
import { BackendUser } from 'shared/types';
import { APIResponse } from 'src/types';

export const useUserById = (
  userId: string | undefined,
): APIResponse<BackendUser> => {
  const [res] = useAxios<BackendUser>({
    method: 'get',
    url: `users/${userId}`,
  });

  return res;
};
