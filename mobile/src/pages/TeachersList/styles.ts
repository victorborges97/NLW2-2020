import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  inforProffys: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inforProffysText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    marginLeft: 10,
    marginTop: 2
  },

  teacherList: {
    marginTop: -40,
  },

  messageFiltro: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  messageFiltroText: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#9871F5'
  },

  serachForm: {
    marginBottom: 24,

  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 4,
    marginBottom: 16,
    fontSize: 16,
    color: '#c1bccc',
  },

  inputPicker: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 0,
    marginTop: 4,
    marginBottom: 16
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  buttonFilters: {
    marginBottom: 20,
  },

  ViewFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9871F5',
  },

  ViewFiltersIconText: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  filtersText: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 16,
    color: '#D4C2FF',
    lineHeight: 19,
    marginLeft: 20
  },

  submitButton: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#04D361'
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF'
  },



});

export default styles;