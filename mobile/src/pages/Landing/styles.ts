import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 158,
    width: '48%',
    padding: 24,
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#9871F5',
  },

  buttonSecundary: {
    backgroundColor: '#04D361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#FFF'
  },

  inform: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 50,
  },

  informBold: {
    fontFamily: 'Poppins_600SemiBold',
    
  },


});

export default styles;