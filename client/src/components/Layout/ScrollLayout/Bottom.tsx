import React, { useMemo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { styles } from './ScrollLayout.styles';

export const Bottom: React.FC<ViewProps> = ({ style, ...props }) => {
  const resultStyles = useMemo(
    () => StyleSheet.flatten([style, styles.bottom]),
    [style],
  );
  return <View {...props} style={resultStyles} />;
};
