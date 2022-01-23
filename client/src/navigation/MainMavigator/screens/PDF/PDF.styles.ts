import { StyleSheet } from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  ACTIVITY_INDICATOR_SIZE,
} from 'src/constants/dimensions';

export const styles = StyleSheet.create({
  pdf: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    left: (SCREEN_WIDTH - ACTIVITY_INDICATOR_SIZE) / 2,
    top: (SCREEN_HEIGHT - ACTIVITY_INDICATOR_SIZE) / 2,
  },
});
