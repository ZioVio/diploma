export type APIResponse<T> = {
  loading: boolean;
  error: unknown;
  data?: T;
};
