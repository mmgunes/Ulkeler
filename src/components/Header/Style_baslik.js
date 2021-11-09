import {StyleSheet} from 'react-native';
import {renkler} from '../../config/colors';

export const baslikStyles = StyleSheet.create({
  // Style leri burdan çekeceğiz
  container: {
    //Ortalamak İçin
    flex: 1,
    alignItems: 'center',

    paddingTop: 36,
    paddingBottom: 10,
    paddingHorizontal: 35,

  },

  boslukVer : {
    width:90,
    height:2,

    marginTop:15,
    marginBottom:5,

    backgroundColor: renkler.gri,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',

    color: renkler.accent,
  },
  subtitle: {
    fontSize: 18,
    color: renkler.yazi_color,
  },
});
