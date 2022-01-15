import { Document } from 'src/types';

export type UsePickDocumentHook = () => {
  document: Document | undefined;
  ready: boolean;
  loading: boolean;
  pick: () => void;
};
