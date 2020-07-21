import React,{useState} from 'react'
import { View ,Text,Image,StyleSheet, TextInput, Button, TouchableOpacity, ScrollView,CheckBox} from 'react-native'
import SchoolBanner from './assets/banner.jpg'
import Cap from './assets/Cap.png'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { Value } from 'react-native-reanimated'

function Login({ navigation }){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleChange=(KEY,VALUE)=>{
    KEY=='name'?setEmail(VALUE):setPassword(VALUE)
    
  }
      const login=()=>{
        if(email==='admin@email.com'&&password==="123456"){
          navigation.navigate("homeScreen")
        }
        else{
          alert('wrong password')
        }
     
      }
 console.log("ac",password)
    return<View style={styles.container}>
       <StatusBar  
                    backgroundColor = "lightblue"  
                    barStyle = "white"   
                    translucent = {true}  
                />          
                <Image source={SchoolBanner} style={{height:200}}/>
        <ScrollView contentContainerStyle={styles.contain}>
        <Text style={{fontSize:20}}  >hey! Welcome back</Text>
    
        <Text style={{fontSize:30,marginBottom:10,fontWeight:'bold'}}><Image source={Cap} style={{height:60,width:50}}/>  Smart-uni</Text>
           <TextInput onChangeText={(Text)=>handleChange("name",Text)} placeholderTextColor="black" placeholder='USER NAME' style={styles.input}/>
           <TextInput  onChangeText={(Text)=>handleChange("password",Text)}  secureTextEntry={true} placeholderTextColor="black"  placeholder='PASSWORD' style={styles.input}/>
<TouchableOpacity style={styles.Button}>
    <Text style={{color:'white',textAlign:'center'}} onPress={login}>Login</Text>
</TouchableOpacity>
<View style={styles.checkboxContainer}>
        <CheckBox
       
          style={styles.checkbox}
        />
        <Text >Remember me?</Text>
      </View>

       </ScrollView>
     
       
    </View>
}
export default Login

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contain:{alignItems:'center'}, checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: "center",
      },
      input:{borderColor:"lightblue",borderStyle:"solid",borderWidth:2
      ,maxWidth:400,
      width:300,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,margin:20},
      Button:{backgroundColor:'blue',padding:20,width:300,margin:20}
  });
  