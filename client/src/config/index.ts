import { IS_ANDROID } from 'utils/consts';

// todo: open envs only for demo purpose

export const SERVER_URL = IS_ANDROID
  ? 'http://10.0.2.2:8080'
  : 'http://localhost:8080';

export const FIREBASE_WEB_CLIENT_ID =
  '137618712362-lqem7jofehubnb40unoalva0mj4mjrai.apps.googleusercontent.com';
