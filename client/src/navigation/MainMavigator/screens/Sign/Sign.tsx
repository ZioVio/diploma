import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { DocumentPickerButton } from 'src/components';
import { ScrollLayout } from 'src/components/layout';
import { BigButton } from 'src/components/UI';
import { CONNECT_QR_ICON } from 'src/constants/icons';
import { styles } from './Sign.styles';
import { SignProps } from './Sign.types';

export const Sign: React.FC<SignProps> = ({
  onError,
  onSigned,
  onViewDocument,
  onConnectToAnotherSign,
}) => {
  return (
    <ScrollLayout.Container>
      <ScrollLayout.Content contentContainerStyle={styles.contentContainer}>
        <DocumentPickerButton onViewDocument={onViewDocument} />
        <BigButton
          onPress={onConnectToAnotherSign}
          icon={CONNECT_QR_ICON}
          style={styles.connectContainer}>
          Connect to another sign
        </BigButton>
        {/* todo move this to the place it has to be in and implement needed logic */}
        <QRCode value="some another string to scan" />
      </ScrollLayout.Content>
      <ScrollLayout.Bottom></ScrollLayout.Bottom>
    </ScrollLayout.Container>
  );
};
