import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceholder}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput 
        // inputMode='email'
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%',

    },
    inputBoxText:{
        fontWeight:'bold',
        alignSelf:'flex-start',
        color:'white'
    },
    textInputStyle:{
        borderBottomWidth:0.5,
        borderBlockColor:'white',
        width:'100%'
    }
})