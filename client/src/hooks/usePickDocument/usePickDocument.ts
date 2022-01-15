import { useCallback, useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import { Document } from 'src/types';
import { UsePickDocumentHook } from './usePickDocument.types';

export const usePickDocument: UsePickDocumentHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // todo maybe take ready from already defined state
  const [ready, setReady] = useState<boolean>(false);
  const [document, setDocument] = useState<Document>();
  const pick = useCallback(async () => {
    setLoading(true);
    setReady(false);
    try {
      const doc = await DocumentPicker.pickSingle({
        allowMultiSelection: false,
        type: [DocumentPicker.types.pdf],
      });
      console.log('file:', doc.uri);
      setReady(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    pick,
    document,
    loading,
    ready,
  };
};
