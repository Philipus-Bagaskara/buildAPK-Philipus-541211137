import React from 'react'
import Background from '../components/Background'
import Picture from '../components/Picture'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Picture />
      <Header>Selamat Datang</Header>
        <Paragraph>
          Masuk
        </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Register
      </Button>
    </Background>
  )
}