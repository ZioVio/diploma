import { IS_ANDROID } from 'utils/consts';

// todo: temporary like this, maybe prod config in future
export const SERVER_URL = IS_ANDROID
  ? 'http://10.0.2.2:8080'
  : 'http://localhost:8080';
