import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,StyleSheet,TextInput} from 'react-native'

// Import Vector Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Import Animation
import * as Animatable from 'react-native-animatable';

const Forgotverification =({navigation})=> {
 
return (

  <Animatable.View animation='zoomIn' style={styles.container}>
 
  {/* Back Arrow Navigation */}
  <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>


  {/* Back Arrow Icon */}
  <AntDesign style={styles.Arrow} name="arrowleft" size={30} />
  
  </TouchableOpacity>
  

  {/* Forgot Password Text  */}
  <Text style={styles.Forgot}>Forgot Password?</Text>
  

  {/* Recover Password  */}
  <Text style={styles.ForgotText}> We have sent send to your email account with a verification code!       </Text>

  <View>


  {/* Verification Code  */}
  <Text style={styles.Verification}>Verification Code</Text>


  {/* Verification TextBox  */}
  
  <TextInput style = {styles.Verificationbox} placeholder = "Ex 123456" keyboardType='email-address' />
  
  
  {/* Verification TextBox */}
  <MaterialCommunityIcons style={styles.Emailicon} name='email-send-outline' size={20}/>

  </View>
  

  {/* Submit Navigation  */}
  <TouchableOpacity style = {styles.SubmitButtone} onPress = {()=>navigation.navigate('ForgotNewPassword')}>
  
  {/* Submit Text  */}
  <Text style={styles.SubmitText}>Submit</Text>
  
  
  </TouchableOpacity>
  </Animatable.View>

  );
  };

  const styles = StyleSheet.create({

container: {
             flex: 1,
             backgroundColor: '#fff',
            },

//----------------------- Arrow Back Style -----------------
Arrow: {
         marginTop: 20,
         color: '#000',
         marginLeft: 10,
        },

//----------------------- Forgot Text Style -----------------
Forgot: {
         fontSize: 30,
         color: '#575DFB',
         fontWeight: 'bold',
         marginTop: 50,
         paddingLeft: 10,
        },

//----------------------- Forgot Text Style -----------------
ForgotText: {
             fontSize: 16,
             lineHeight: 24,
             fontWeight: 'bold',
             color: '#000',
             paddingTop: 20,
             textAlign:'center',
            },

//----------------------- Email Text Style -------------------
Emailicon: {
             position: 'absolute',
             left: 33,
             top: 80,
             color: '#575DFB',
            },

//----------------------- Verification  Style -----------------
Verification: {
               color: '#000',
               fontSize: 15,
               paddingLeft: 20,
               marginTop: 40,
              },

//----------------------- Verification TextBox Style ------------
Verificationbox: {
                   borderWidth: 1,
                   borderColor: '#575DFB',
                   width: 360,
                   alignSelf: 'center',
                   textAlign:'center',
                   borderRadius: 10,
                   marginTop: 5,
                  },

//----------------------- Verification icon Style ---------------
Verificationicon: {
                   position: 'absolute',
                   left: 33,
                   top: 80,
                   color: '#575DFB',
                  },

 //----------------------- Submit TextBox Style -----------------
SubmitButtone: {
                 backgroundColor: '#575DFB',
                 width: 360,
                 height: 44,
                 alignSelf: 'center',
                 borderRadius: 10,
                 marginTop: 30,
                },

//----------------------- Submit Text Style --------------------
SubmitText: {
             color: '#FFF',
             fontWeight: 'bold',
             fontSize: 18,
             marginTop: 8,
             alignSelf: 'center',
            },

//----------------------- Email Icon Style ------------
Emailicon: {
             position: 'absolute',
             left: 33,
             top: 80,
             color: '#575DFB',
            },
  }
  )
export default Forgotverification;
