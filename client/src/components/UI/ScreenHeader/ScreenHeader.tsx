import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Appbar, Avatar } from 'react-native-paper';
import { useAuth } from 'src/hooks/useAuth';
import { styles } from './ScreenHeader.styles';

export const ScreenHeader: React.FC<NativeStackHeaderProps> = ({
  options,
  back,
  navigation,
}) => {
  const { user } = useAuth();
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={options.title} />
      <Avatar.Image
        size={24}
        source={{ uri: user?.photoUrl || '' }}
        style={styles.userAvatar}
      />
    </Appbar.Header>
  );
};
