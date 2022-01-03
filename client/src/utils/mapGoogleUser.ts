import { GoogleUser, User } from 'src/types/user';

export const mapGoogleUser = (googleUser: GoogleUser): User => ({
  id: googleUser.user.id,
  name: googleUser.user.name,
  photoUrl: googleUser.user.photo,
});
