import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,TextInput} from 'react-native'

// Import Vector Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Import Animation
import * as Animatable from 'react-native-animatable';


const Verification =({navigation})=> {
  
return (
  <Animatable.View animation='zoomIn' style = {styles.container}>   

  {/* Back Arrow Navigation*/}
  <TouchableOpacity onPress = {() => navigation.navigate('Register')}>
  

  {/* Back Arrow Icon*/}
  <AntDesign style = {styles.Arrow} name="arrowleft" size={30} />
   
  </TouchableOpacity>


  {/* Register Text */}
  <Text style = {styles.Register}>Register</Text>


  {/* Verification Code */}
  <Text style = {styles.Registernow}>  We have sent an email to your email account with a verification code!      </Text>

  <View>

   
  {/* Verification Text */}
  <Text style = {styles.Verification}> Verification Code </Text>
  

  {/* Verification TextBox */}
  <TextInput style = {styles.Verificationbox} placeholder="Ex 123456" placeholderTextColor="#999" keyboardType='number-pad' />


  {/* Password Icon */}
  <Ionicons style = {styles.passwordIcon} name = "lock-closed-outline" size = {20} />

  </View>
  
  
  {/* Navigation Login */}
  <TouchableOpacity style={styles.RegisterButton} onPress={()=>navigation.navigate('Login')}>

  
  {/* Register Text */}
  <Text style={styles.RegisterText}>Register</Text>

  
  </TouchableOpacity>
  </Animatable.View> 

  );
  };

const styles = StyleSheet.create({

//----------------------- Password Icon Style -----------
container: {
             flex: 1,
             backgroundColor: '#fff',
            },

//----------------------- Arrow Back Style --------------
Arrow: {
         marginTop: 20,
         color: '#000',
         marginLeft: 10,
         },

//----------------------- Register Text Style -----------
Register: {
           fontSize: 30,
           color: '#575DFB',
           fontWeight: 'bold',
           marginTop: 50,
           paddingLeft: 10,
          },

//----------------------- Register Verification Style ---
Registernow: {
               fontSize: 16,
               lineHeight: 24,
               fontWeight: 'bold',
               color: '#000',
               paddingTop: 20,
               textAlign: 'center',
               },
 
//----------------------- Verification Text ------------
Verification: {
               color: '#000',
               fontSize: 15,
               paddingLeft: 20,
               marginTop: 40,
              },

//----------------------- Verification TextBox Style ---
Verificationbox: {
                   borderWidth: 1,
                   borderColor: '#575DFB',
                   width: 360,
                   alignSelf: 'center',
                   textAlign:'center',
                   borderRadius: 10,
                   marginTop: 5,
                   },

//----------------------- Password Icon Style -----------
passwordIcon: {
               position: 'absolute',
               left: 30,
               top: 79,
               color: '#575DFB',
},

//----------------------- Verification Icon Style --------
Verificationicon: {
                   position: 'absolute',
                   left: 33,
                   top: 80,
                   color: '#575DFB',
                  },

//----------------------- Register TextBox Style ---------
RegisterButton: {
                 backgroundColor: '#575DFB',
                 width: 360,
                 height: 44,
                 alignSelf: 'center',
                 borderRadius: 10,
                 marginTop: 30,
                 },
  
//----------------------- Register Text Style ------------                
RegisterText: {
               color: '#FFF',
               fontWeight: 'bold',
               fontSize: 18,
               marginTop: 8,
               alignSelf: 'center',
              },
    
}
);
  export default Verification;

