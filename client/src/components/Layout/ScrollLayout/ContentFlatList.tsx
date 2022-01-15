import React, { useMemo } from 'react';
import { FlatList, FlatListProps, StyleSheet } from 'react-native';
import { styles } from './ScrollLayout.styles';

export const ContentFlatList = <T extends unknown>({
  style,
  ...props
}: FlatListProps<T>) => {
  const resultStyles = useMemo(
    () => StyleSheet.flatten([style, styles.content]),
    [style],
  );
  return <FlatList {...props} style={resultStyles} />;
};
