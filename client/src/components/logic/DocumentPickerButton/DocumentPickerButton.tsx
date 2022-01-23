import React, { useCallback } from 'react';
import { View } from 'react-native';
import { BigButton } from 'src/components';
import { DOCUMENT_ICON, EYE_ICON } from 'src/constants/icons';
import { usePickDocument } from 'src/hooks/usePickDocument';
import { styles } from './DocumentPickerButton.styles';
import { DocumentPickerButtonProps } from './DocumentPickerButton.types';

export const DocumentPickerButton: React.FC<DocumentPickerButtonProps> = ({
  onViewDocument,
}) => {
  const { pick, loading, document } = usePickDocument();

  const onViewPressed = useCallback(() => {
    if (document) {
      onViewDocument(document);
    }
  }, [document, onViewDocument]);
  return (
    <View style={styles.container}>
      <BigButton
        icon={DOCUMENT_ICON}
        onPress={pick}
        style={styles.pickButton}
        loading={loading}>
        {document?.name || 'Select document'}
      </BigButton>
      {document && (
        <BigButton onPress={onViewPressed} icon={EYE_ICON} mode="text">
          View
        </BigButton>
      )}
      {/*  */}
    </View>
  );
};
