import {StyleSheet} from 'react-native';
import { renkler } from '../../config/colors';

export const baslikStyles = StyleSheet.create({
  // Style leri burdan çekeceğiz
  container: {
    
  },
  title: {
    fontSize: 36,
    fontWeight: '700',

    color: renkler.accent
  },
  subtitle: {
    fontSize: 18,
    color: renkler.yazi_color
  }
});
