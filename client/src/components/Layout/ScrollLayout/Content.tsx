import React, { useMemo } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';
import { styles } from './ScrollLayout.styles';

export const Content: React.FC<ScrollViewProps> = ({ style, ...props }) => {
  const resultStyles = useMemo(
    () => StyleSheet.flatten([style, styles.content]),
    [style],
  );
  return <ScrollView {...props} style={resultStyles} />;
};
