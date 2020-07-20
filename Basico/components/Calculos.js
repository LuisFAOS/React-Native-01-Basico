import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function calculos(){

    const [firstVal, setFirstVal]=useState('');
    const [secondVal, setSecondVal]=useState('');
    const [result, setResult]=useState('Informe os dois números');

    const _somarEapresentar=()=>{
        if(!firstVal.trim()=='' && !isNaN(firstVal) && !secondVal.trim()=='' && !isNaN(secondVal)){
               setResult(Number(firstVal)+Number(secondVal))
        }else setResult("Dados inválidos!!")
    
    }
    const _limpar=()=>{
        setFirstVal('')
        setSecondVal('')
        setResult('Informe os dois números')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SOMAR</Text>
            <View style={{marginTop:20}}>
                <TextInput
                style={styles.input}
                placeholder="Insira o 1º valor"
                onChangeText={firstVal => setFirstVal(firstVal)}
                value={firstVal}
                />
                <TextInput
                style={styles.input}
                placeholder="Insira o 2º valor"
                onChangeText={secondVal => setSecondVal(secondVal)}
                value={secondVal}
                />
                <Text style={styles.labelResult}>Resultado: </Text>
                <Text style={styles.resultsum}>{result}</Text>
                
                <View style={styles.containerButtons}>
                    <View style={{width:40+'%'}}>
                        <TouchableOpacity onPress={_somarEapresentar} style={styles.buttons}>
                            <Text style={{fontSize:14,color:'white'}}>CALCULAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:40+'%'}}>
                        <TouchableOpacity onPress={_limpar} style={styles.buttons}>
                            <Text style={{fontSize:14,color:'white'}}>LIMPAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: 'black',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  title: {
    marginTop:5,
    fontWeight:"bold", 
    fontSize:18, 
    color:"white", 
    textAlign:"center"
  },
  input: {
      backgroundColor:'white',
      fontSize:14,
      marginBottom:5,
      marginTop:5,
      paddingLeft:5,
      borderRadius:5,
      height:35,
  },
  labelResult:{
      fontSize:14,
      color:'white'
  },
  resultsum:{
      fontSize:14,
      textAlign:'center',
      paddingTop:5,
      height:35,
      borderRadius:2,
      marginTop:5,
      marginBottom:5,
      backgroundColor:'white',
      color:'black'
  },
  containerButtons:{
      display:'flex',
      flexDirection: 'row', 
      justifyContent: 'space-around',
      marginTop:10
  },
  buttons:{
      height:40,
      backgroundColor:'#dc3545',
      borderColor:'white',
      borderWidth:2,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  }
})