import { useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';
import { ScrollLayout } from 'src/components/layout';
import { ACTIVITY_INDICATOR_SIZE } from 'src/constants/dimensions';
import { Document } from 'src/types';
import { styles } from './PDF.styles';

export const PDF: React.FC = () => {
  // yeah, this can be beautifully type but I don't care in this project
  const doc = (useRoute()?.params as { document: Document })?.document;
  const source = useMemo(
    () => ({
      uri: `data:application/pdf;base64,${doc.base64}`,
    }),
    [doc],
  );
  const [canShowPDF, setCanShowPDF] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pdf = useMemo(() => {
    return (
      canShowPDF && (
        <>
          <Pdf
            source={source}
            onError={err => {
              console.log('ERR', err);
            }}
            onLoadComplete={() => setLoaded(true)}
            style={styles.pdf}
          />
        </>
      )
    );
  }, [canShowPDF, source]);

  useEffect(() => {
    setCanShowPDF(true);
  }, []);

  return (
    <ScrollLayout.Container>
      {!loaded && (
        <ActivityIndicator
          size={ACTIVITY_INDICATOR_SIZE}
          style={styles.activityIndicator}
        />
      )}
      {pdf}
    </ScrollLayout.Container>
  );
};
