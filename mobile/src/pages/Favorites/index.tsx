import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader/index'
import TeacherItem, { Teacher } from '../../components/TeacherItem/index'

import styles from './styles';

const Favorites: React.FC = () => {

  const [favorites, setFavorites] = useState([]);
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>

      <PageHeader title="Meus proffysFavoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >

        {
          favorites.map((teacherItem: Teacher) => {
            return(  
            <TeacherItem 
              teacher={teacherItem}
              key={teacherItem.id}
              favorited
            />
            )
          })
        }

      </ScrollView>

  </View>
  );
}

export default Favorites;