import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background'
import Picture from '../components/Picture'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function ({ navigation }) {
  const [likes, setLikes] = useState(10);
  const [dislikes, setDislikes] = useState(5);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const styles = StyleSheet.create({
    projek: {
      height: 200,
      width: 300,
      borderRadius: 10,
    },
    likeButtons: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  });  
  return (
    <Background>
      <Picture/>
      <Header>Philipus Bagaskara</Header>
      <Paragraph>
        Siswa SMK Telkom Purwokerto 
        Tahun ajaran 2023/2024
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('PortofolioScreen')
        }
      >
        Hubungi Saya
      </Button>
      <Paragraph>
        Projek Terbaru
      </Paragraph>
      <Image
        style={styles.projek}
        resizeMode="contain"
        source={require('../assets/Projek.png')}
      />
      <View style={styles.likeButtons}>
          <TouchableOpacity onPress={handleLike}>
            <MaterialCommunityIcons
              style={{ left: -140, top: 10 }}
              name="thumb-up"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <Text style={{ left: -135, top: 13 }}>{likes}</Text>
        </View>
        <View style={styles.likeButtons}>
          <TouchableOpacity onPress={handleDislike}>
            <MaterialCommunityIcons
              style={{ left: -90, top: -25 }}
              name="thumb-down"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <Text style={{ left: -86, top: -22 }}>{dislikes}</Text>
      </View>          
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Keluar
      </Button>
    </Background>
  )
}