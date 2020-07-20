import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function BoasVindas(props) {

    const [nome, setNome] = useState(''); 
    const [sobrenome, setSobrenome] = useState(''); 
    const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [mostraMensagem, setMostraMensagem] = useState(false);

    const _apresentaMensagem = () => {
        if (nome.length<3 || sobrenome.length<3) {
            console.log("ERROR, DADOS INVÁLIDOS");
            Alert.alert('Você não preencheu os dados corretamente!',
            'Insira-os novamente!'
            [
                {text:'OK'}
            ]
            );
        }else{
            console.log(nome.replace(" ",""))
            setMostraMensagem(true)
        }
    }

    const _limpar= () => {
        setSobrenome('')
        setNome('')
        setMostraMensagem(false)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                IDENTIFIQUE-SE
            </Text>
            <View style={{marginTop:20}}>
                <TextInput
                style={styles.input}
                placeholder="Insira seu nome"
                onChangeText={nome => setNome(nome)}
                value={nome}
                />
                <TextInput
                style={styles.input}
                placeholder="Insira seu sobrenome"
                onChangeText={sobrenome => setSobrenome(sobrenome)}
                value={sobrenome}
                />
            </View>
            {mostraMensagem && (
                <View>
                    <Text style={styles.txtStyle}>Olá, {nome} {sobrenome}</Text>
                    <Text style={styles.txtStyle}>Seja bem vindo(a)</Text>
                </View>
            )}
            <View style={styles.containerButtons}>
                <View style={{width:40+'%'}}>
                    <Button onPress={_apresentaMensagem} title="ENVIAR"/>
                </View>
                <View style={{width:40+'%'}}>
                    <Button onPress={_limpar} title="LIMPAR"/>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  input: {
      backgroundColor:'#dcedff',
      fontSize:14,
      marginBottom:5,
      marginTop:5,
      paddingLeft:5,
      borderRadius:5,
      height:35,
  },
  title:{
    marginTop:5,
    fontWeight:"bold", 
    fontSize:18, 
    color:"white", 
    textAlign:"center"
  },
  containerButtons:{
      display:'flex',
      flexDirection: 'row', 
      justifyContent: 'space-around',
      marginTop:10
  },
  txtStyle:{
      textAlign:'center',
      color:'white',
      fontSize:13
  }
});