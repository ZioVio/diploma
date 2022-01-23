import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button, IconButton, Paragraph } from 'react-native-paper';
import { DocumentPickerButton } from 'src/components';
import { ScrollLayout } from 'src/components/layout';
import { BigButton } from 'src/components/UI';
import { DOCUMENT_ICON, EYE_ICON } from 'src/constants/icons';
import { usePickDocument } from 'src/hooks/usePickDocument';
import { styles } from './Sign.styles';
import { SignProps } from './Sign.types';

export const Sign: React.FC<SignProps> = ({
  onError,
  onSigned,
  onViewDocument,
}) => {
  return (
    <ScrollLayout.Container>
      <ScrollLayout.Content style={styles.contentContainer}>
        <DocumentPickerButton onViewDocument={onViewDocument} />
      </ScrollLayout.Content>
      <ScrollLayout.Bottom></ScrollLayout.Bottom>
    </ScrollLayout.Container>
  );
};
