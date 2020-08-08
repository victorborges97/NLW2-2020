import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5'
  },

  topBar: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: 10
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    maxWidth: 160,
    lineHeight: 32,
    marginVertical: 37
  },

});

export default styles;