import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './BigButton.styles';
import { BigButtonProps } from './BigButton.types';

export const BigButton: React.FC<BigButtonProps> = ({
  labelStyle,
  style,
  ...props
}) => {
  return (
    <Button
      style={[styles.button, style]}
      labelStyle={[styles.label, labelStyle]}
      mode="outlined"
      {...props}
    />
  );
};
