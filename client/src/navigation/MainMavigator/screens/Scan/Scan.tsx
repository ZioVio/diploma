import React, { useCallback } from 'react';
import { View } from 'react-native';
import QRCodeScanner, {
  RNQRCodeScannerProps,
} from 'react-native-qrcode-scanner';
import { styles } from './Scan.styles';
import { ScanProps } from './Scan.types';

export const Scan: React.FC<ScanProps> = ({ onScanned }) => {
  const onRead = useCallback<RNQRCodeScannerProps['onRead']>(
    res => {
      onScanned(res.data);
    },
    [onScanned],
  );

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onRead}
        fadeIn
        topViewStyle={styles.topAndBottomContent}
        bottomViewStyle={styles.topAndBottomContent}
        cameraStyle={styles.camera}
      />
    </View>
  );
};
