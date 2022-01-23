import React from 'react';
import { Button, Divider, Paragraph } from 'react-native-paper';
import { ScrollLayout } from 'src/components/layout';
import { SIGN_ICON, VERIFY_ICON } from 'src/constants/icons';
import { styles } from './MyDocuments.styles';
import { MyDocumentsProps } from './MyDocuments.types';

export const MyDocuments: React.FC<MyDocumentsProps> = ({
  onSign,
  onVerify,
}) => {
  return (
    <ScrollLayout.Container>
      <ScrollLayout.Content>
        <Paragraph>The list of documents</Paragraph>
      </ScrollLayout.Content>
      <Divider />
      <ScrollLayout.Bottom style={styles.bottomContainer}>
        <Button
          onPress={onVerify}
          mode="outlined"
          icon={VERIFY_ICON}
          style={styles.button}>
          Verify
        </Button>
        <Button
          onPress={onSign}
          mode="contained"
          icon={SIGN_ICON}
          style={styles.button}>
          Sign
        </Button>
      </ScrollLayout.Bottom>
    </ScrollLayout.Container>
  );
};
