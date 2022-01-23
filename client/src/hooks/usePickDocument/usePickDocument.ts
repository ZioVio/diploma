import { useCallback, useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import getPath from '@flyerhq/react-native-android-uri-path';
import { Document } from 'src/types';
import { UsePickDocumentHook } from './usePickDocument.types';
import { requestPermissions } from './usePickDocument.utils';

export const usePickDocument: UsePickDocumentHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // todo maybe take ready from already defined state
  const [ready, setReady] = useState<boolean>(false);
  const [document, setDocument] = useState<Document>();
  const pick = useCallback(async () => {
    setLoading(true);
    setReady(false);
    try {
      // todo extract it to somewhere
      const pickedDoc = await DocumentPicker.pickSingle({
        allowMultiSelection: false,
        type: [DocumentPicker.types.pdf],
      });
      const rawPart = pickedDoc.uri.split('raw%3A')[1];
      const filePath = getPath(
        rawPart ? rawPart.replace(/\%2F/gm, '/') : pickedDoc.uri,
      );
      const permissionsGranted = await requestPermissions();
      if (!permissionsGranted) {
        throw new Error('PERMISSIONS NOT GRANTED');
      }
      const file = await RNFetchBlob.fs.readFile(filePath, 'base64');
      setDocument({
        name: pickedDoc.name,
        base64: file,
      });
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
