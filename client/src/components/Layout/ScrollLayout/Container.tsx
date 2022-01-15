import React, { useMemo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { styles } from './ScrollLayout.styles';

export const Container: React.FC<ViewProps> = ({ style, ...props }) => {
  const resultStyles = useMemo(
    () => StyleSheet.flatten([style, styles.container]),
    [style],
  );
  return <View {...props} style={resultStyles} />;
};
