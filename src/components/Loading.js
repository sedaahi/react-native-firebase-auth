import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = ({name, changeIsLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>changeIsLoading()} style={[{},styles.closeButtonContainer]}> 
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'blue'}/>
      <Text style={styles.loginText}>Loading..</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'tomato',
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        
    }
})