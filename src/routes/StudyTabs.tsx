import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeachersList from '../pages/TeachersList/index'
import Favorites from '../pages/Favorites/index'

import EaseSvg from '../components/svg/EaseSvg'

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevetion: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        activeTintColor: '#32264D',
        inactiveTintColor: '#c1bccc',
      }}
    >
      <Screen 
        name="TeachersList" 
        component={TeachersList} 
        options={{
          tabBarLabel:'Proffy',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <EaseSvg color={color} size={size} focused={focused} />
              // <Ionicons name="easel-outline" size={size} color={color} />
            )
          }
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel:'Favoritos',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="md-heart-empty" size={size} color={focused ? '#8257e5' : color} />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default StudyTabs;