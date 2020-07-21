import React,{useEffect} from 'react'
import { View ,Text,Image,StyleSheet,BackHandler} from 'react-native'
import Profile from './assets/profile.jpg'
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { ScrollView } from 'react-native-gesture-handler';



function Home(){
  
    return(
        <ScrollView>
            <View style={styles.mainContainer}>
<View>
        <Image source={Profile} style={{height:100,width:100,borderRadius:50}}/>
        </View>
        <View>  
              <Text style={{color:'white',fontSize:12}}>EMAIL:AAARIFAHMAD135@GMAIL.COM   
        
        
     </Text>
     <Text style={{color:'white',fontSize:12}}>NAME:MUHAMMAD ARIF</Text>
        
     
     </View>

    
            </View> 
            <View style={{margin:20}}>
                <Text><Feather name="book-open" size={24} color="black" />
 ANNOUCMENT</Text>
            </View>




            <View style={styles.box}>
 <Text style={styles.text}>    <Entypo name="arrow-bold-right" size={30} color="black" />
 CLASS WORK</Text>

            <View style={styles.right}>
            <AntDesign name="caretdown" size={24} color="white" />
</View> 
            </View> 
               <View style={styles.box}>
    <Text style={styles.text}>    <Entypo name="arrow-bold-right" size={30} color="black" />

 HOLIDAY
 </Text>
 <View style={styles.right}>
            <AntDesign name="caretdown" size={24} color="white" />
</View> 
     </View>
     <View style={styles.box}>
     <Text style={styles.text}>    <Entypo name="arrow-bold-right" size={30} color="black" />
 HOME WORK</Text>
 <View style={styles.right}>
            <AntDesign name="caretdown" size={24} color="white" />
</View> 
     </View>
    
    

        </ScrollView>
    )
}
export default Home
const styles=StyleSheet.create({
    box:{    height:150,
        width:"80%",
        backgroundColor:"white",
        borderRadius:15,
        padding:5,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        margin:10, justifyContent:'center'

}
    ,
    text:{fontSize:20},
    mainContainer:{flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:200,backgroundColor:'#419dfa',borderBottomLeftRadius:20,borderBottomRightRadius:20,}
    ,right:{width:"20%",height:150,backgroundColor:'blue',position:"absolute",right:0,justifyContent:'center',alignItems:"center"}

})