import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  content:{
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180

  },

  description: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
    maxWidth: 240,
  },

  button: {
    marginVertical: 40,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#04D361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },

});

export default styles;