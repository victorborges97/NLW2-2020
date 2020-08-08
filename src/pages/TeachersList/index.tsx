import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import { Feather, Ionicons } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader/index';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import NerdIcon from '../../assets/images/icons/nerd-proffys.png';

import styles from './styles';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

const TeachersList: React.FC = () => {

  const [teachers,setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject,setSubject] = useState('select');
  const [weekDay,setWeekDay] = useState('select');
  const [time,setTime] = useState('');

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(res=> {
      const { total } = res.data

      setTotalConnections(total)
    })
  },[])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)

        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  function handleFilters() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()

    const res = await api.get('classes', {
      params:{
        subject,
        time,
        week_day: weekDay,
      }
    })
    handleFilters()
    setTeachers(res.data)
    console.log(teachers)
  }

  function teste(teachers: Teacher) {
    if(teachers) {
      return(
        <View style={styles.messageFiltro}>
          <Text style={styles.messageFiltroText}>Use o Filtro para ver os Proffys</Text>
        </View>
      )
    }
    return
  }
  
  return (
    <View style={styles.container}>

      <PageHeader 
        title="Proffys Disponíveis"
        headerRight={(
          <View style={styles.inforProffys} >
            <Image source={NerdIcon} />
            <Text style={styles.inforProffysText} >{totalConnections} proffys</Text>
          </View>
        )}
      >

        <RectButton onPress={handleFilters} style={styles.buttonFilters} >

          <View style={styles.ViewFilters}>
            <View style={styles.ViewFiltersIconText}>
              <Feather name='filter' size={20} color="#04D361" />
              <Text style={styles.filtersText} >Filtrar por dia, hora e matéria</Text>
            </View>
            <Ionicons name='ios-arrow-down' size={20} color="#A380F6" />
          </View>
          
        </RectButton>

        { isFiltersVisible && (
          <View style={styles.serachForm} >
            <Text style={styles.label} >
              Matéria
            </Text>

            <View style={styles.inputPicker} >
              <Picker
                selectedValue={subject}
                style={{
                  width: "100%"
                }}
                itemStyle={{
                  fontSize: 10,
                  fontFamily: 'Poppins_400Regular'
                }}
                onValueChange={(itemValue: ItemValue) => { setSubject(itemValue) } }
              >
                <Picker.Item color='#c1bccc' label="Selecione" value="select" />
                <Picker.Item color='#c1bccc' label= "Artes" value= "Artes" />
                <Picker.Item color='#c1bccc' label= "Ciências" value= "Ciências" />
                <Picker.Item color='#c1bccc' label= "Geografia" value= "Geografia" />
                <Picker.Item color='#c1bccc' label= "Matemática" value= "Matemática" />
                <Picker.Item color='#c1bccc' label= "Quimica" value= "Quimica" />
                <Picker.Item color='#c1bccc' label= "Portugues" value= "Portugues" />
                <Picker.Item color='#c1bccc' label= "Programação" value= "Programação" />
                <Picker.Item color='#c1bccc' label= "React Native e React" value= "React Native e React" />
              </Picker>

            </View>
            

            <View style={styles.inputGroup} >

              <View style={styles.inputBlock} >
                <Text style={styles.label} >
                  Dia da semana
                </Text>
                <View style={styles.inputPicker} >
                  <Picker
                    selectedValue={weekDay}
                    style={{
                      width: "100%"
                    }}
                    itemStyle={{
                      fontSize: 10,
                      fontFamily: 'Poppins_400Regular'
                    }}
                    onValueChange={(itemValue: ItemValue) =>
                      setWeekDay(itemValue)
                    }
                  >
                    <Picker.Item color='#c1bccc' label="Selecione" value="select" />
                    <Picker.Item color='#c1bccc' label="Domingo" value="0" />
                    <Picker.Item color='#c1bccc' label="Segunda-feira" value="1" />
                    <Picker.Item color='#c1bccc' label="Terça-feira" value="2" />
                    <Picker.Item color='#c1bccc' label="Quarta-feira" value="3" />
                    <Picker.Item color='#c1bccc' label="Quinta-feira" value="4" />
                    <Picker.Item color='#c1bccc' label="Sexta-feira" value="5" />
                    <Picker.Item color='#c1bccc' label="Sábado" value="6" />
                    
                    
                  </Picker>
                    {/* <TextInput 
                  style={styles.input} 
                  placeholder='Qual o dia'
                  placeholderTextColor='#c1bccc'
                  /> */}
                </View>
              
              </View>

              <View style={styles.inputBlock} >
                <Text style={styles.label} >
                Horário
                </Text>
                <TextInput 
                value={time}
                style={styles.input} 
                placeholder='Qual horário'
                placeholderTextColor='#c1bccc'
                onChangeText={(text) => setTime(text)}
                />

              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton} >
              <Text style={styles.submitButtonText} >Filtrar</Text>
            </RectButton>


          </View>
        )}         

      </PageHeader>

      {
        teste(teachers)
      }

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 6
          }}
        >

          {teachers.map((teacher: Teacher ) => {
            return(
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}  
              favorited={favorites.includes(teacher.id)}
            />)
          })}

        </ScrollView>

    </View>
  );
}

export default TeachersList;