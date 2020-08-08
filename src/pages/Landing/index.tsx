import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcons from '../../assets/images/icons/study.png';
import giveClassesIcons from '../../assets/images/icons/give-classes.png';
import heartIcons from '../../assets/images/icons/heart.png';
import api from '../../services/api';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(res=> {
      const { total } = res.data

      setTotalConnections(total)
    })
  },[])

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPage() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={landingImg} 
        style={styles.banner}
      />

      <Text style={styles.title}>
        Seja bem-vindo. {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonContainer} >
        <RectButton 
          onPress={handleNavigateToStudyPage} 
          style={[styles.button, styles.buttonPrimary]} 
        >
          <Image source={studyIcons} />
          <Text style={styles.buttonText} >Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage} 
          style={[styles.button, styles.buttonSecundary]} 
        >
          <Image source={giveClassesIcons} />
          <Text style={styles.buttonText} >Dar aulas</Text>
        </RectButton>
      </View>
      
      <Text style={styles.inform}>
        Total de {totalConnections} conexões {'\n'}
        <Text style={styles.informBold}>
          já realizadas {' '}
        </Text>
        <Image source={heartIcons} />
      </Text>

    </View>
  );
}

export default Landing;