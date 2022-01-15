import React from 'react';
import { Button, Paragraph } from 'react-native-paper';
import { ScrollLayout } from 'src/components/Layout';
import { usePickDocument } from 'src/hooks/usePickDocument';
import { SignProps } from './Sign.types';

export const Sign: React.FC<SignProps> = ({ onError, onSigned }) => {
  const { pick, ready, loading, document } = usePickDocument();
  return (
    <ScrollLayout.Container>
      <ScrollLayout.Content>
        <Paragraph>Sign screen</Paragraph>
        <Paragraph>{document?.name}</Paragraph>
        <Button onPress={pick}> pick</Button>
      </ScrollLayout.Content>
      <ScrollLayout.Bottom></ScrollLayout.Bottom>
    </ScrollLayout.Container>
  );
};
