import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api';

import styles from './styles';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItens {
  teacher: Teacher;
  favorited: Boolean;
}

const TeacherItem: React.FC<TeacherItens> = ({ teacher, favorited }) => {

  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkWhatsapp() {
    Linking.openURL(`whatsapp://send?text=Olá Professor, quero fazer uma aula com você podemos combinar ?&phone=+55${teacher.whatsapp}`)
    CreateNewConnection()
  }

  function CreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  async function handleToogloFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited){
      //remover dos favoritos
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      })

      favoritesArray.splice(favoriteIndex, 1)

      setIsFavorited(false)
    } else {
      //adicionar aos favoritos
      favoritesArray.push(teacher);

      setIsFavorited(true)
      
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container} >
      <View style={styles.porfile}>
        <Image 
          style={styles.avatar}
          source={{ uri: `${teacher.avatar}` }} 
          accessibilityLabel={`${teacher.name}`}
        />

        <View style={styles.porfileInfo} >
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>

      </View>
      <Text style={styles.bio} >
      {teacher.bio}
      </Text>

      <View style={styles.footer} >
        <Text style={styles.price} >
          Preço/Hora {'   '}
          <Text style={styles.priceValue} >R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>

          <RectButton 
            onPress={handleToogloFavorite} 
            style={[
                styles.favoriteButton, 
                isFavorited ? styles.favorited : {} 
            ]} 
          >
            { isFavorited
            ? <Image source={unFavoriteIcon} />
            : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={handleLinkWhatsapp} style={styles.contactButton} >
            <Image 
            source={whatsappIcon}
            style={styles.whatsappIcon} 
            />
            <Text style={styles.contactButtonText} >Entrar em contato</Text>
          </RectButton>

        </View>

      </View>

    </View>
  );
}

export default TeacherItem;