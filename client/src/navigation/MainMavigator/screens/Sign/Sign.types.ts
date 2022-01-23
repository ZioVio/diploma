import { Document } from 'src/types';

export type SignProps = {
  onSigned: () => void;
  onError: (message: string) => void;
  onViewDocument: (doc: Document) => void;
};
