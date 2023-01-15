/*
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function App() {

  const [nome, setNome] = useState('')

  function pegaNome(texto) {
    //alert(texto)

    if (texto.length > 0) {
      setNome('Bem-Vindo(a) ' + texto)
    } else {
      setNome('')
    }
    
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={ (text) => pegaNome(text)}
      />

      <Text style={styles.texto}> {nome} </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  }, 
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
})

export default  App
*/

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

function App() {

  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  function entrar() {
    
    if (input === '') {
      alert('Digite seu nome!')
      return
    }

    setNome('Bem-vindo(a) ' + input)

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={ (texto) => setInput(texto)}
      />

      <Button title='Entrar' onPress={ entrar }/>
      
      <Text style={styles.texto}> {nome} </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  }, 
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15
  }
})

export default  App