import React from 'react'
import { StyleSheet, Text, View,Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return ( 
     
      <View style={styles.container}>
          <Image
            source={require('./assets/pupfeeder_logo.png')} 
            style = {styles.logo}          
          />
        <TextInput
          placeholder='Email'
          style = {styles.entradas}
        />
         <TextInput
          placeholder='Senha'
          style = {styles.entradas}
        />
        <Button
          title='Acessar'
          style = {styles.botoes}
        />
        <TouchableOpacity
          style = {styles.opacidade}
        > 
          <Text>Esqueci a Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.opacidade}
        >
          <Text>Criar uma conta</Text>
        </TouchableOpacity>
        
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex: 0.3,     
    resizeMode: 'contain'
  },
  entradas:{
    borderColor: 'black',
    margin:10,
    padding:20,
    borderWidth: 1,
    width: "80%",
    borderRadius: 7,
    height: 50
  },
  botoes:{
   backgroundColor: 'yellow',
   margin:10
  },
  opacidade:{
    borderColor: 'black',
    margin:10,
    width: "80%",
    height: 50
  }
});
