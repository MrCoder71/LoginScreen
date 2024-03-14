import React, { Component } from 'react';
import {View ,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';

// Vector Icon Import
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Animation 
import * as Animatable from 'react-native-animatable';

const Register = ({ navigation }) => {

return (
   
  <Animatable.View animation = 'zoomIn' style = {styles.container}>

  {/* Back Arrow Navigation*/}
  <TouchableOpacity onPress = {() => navigation.navigate('Splashscreen')}>


  {/* Back Arrow Icon */}
  <AntDesign style = {styles.Arrow} name="arrowleft" size = {30} />


  </TouchableOpacity>

  {/* Register Title */}
  <Text style={styles.register}>Register</Text>


  {/* Create Account Text */}
  <Text style = {styles.registerNow}> Create an account to access all the features of App! </Text>


  <View>

  {/* Email Text */}
  <Text style = {styles.email}> Email </Text>

  
  {/* Email TextBox */} 
  <TextInput style = {styles.emailBox} placeholder="example@gmail.com" placeholderTextColor="#999" keyboardType="email-address" />


  {/* Email Icon */} 
  <Fontisto style = {styles.emailIcon} name="email" size = {20} />

  
  </View>

  <View>
  
  {/* User Name Text */}
  <Text style={styles.name}>Your Name</Text>


  {/* User TextBox */}
  <TextInput style = {styles.nameBox} placeholder = "Ex. Mr Coder" placeholderTextColor = "#999" keyboardType = "email-address" />

    
  {/* User Icon */}
  <AntDesign style={styles.nameIcon} name="user" size={20} />

    
  </View>

  <View>
  
  {/* Password Text */}
  <Text style = {styles.password}>Password</Text>


  {/* Password TextBox */}
  <TextInput style = {styles.passwordBox} placeholder = "**********" secureTextEntry = {true} />


  {/* Password Icon */}
  <Ionicons style = {styles.passwordIcon} name = "lock-closed-outline" size = {20} />

 
  </View>

  {/* Register Navigation Verification */}
  <TouchableOpacity style={styles.registerButton} onPress = {() => navigation.navigate('Verification')}>


  {/* Register Text */}
  <Text style={styles.registerText}>Register</Text>
  
  
  </TouchableOpacity>

  {/* Align Text */}
  <View style = {{ left: 105, marginTop: 30 }}>

 
   {/* Already Have an Account */}
  <Text style = {styles.alreadyAccount}> Already have an account? </Text>

  
  {/* Navigation Login Screen */} 
  <TouchableOpacity onPress = {() => navigation.navigate('Login')}>

      
  {/* Login Text */}
  <Text style = {styles.login}> Login </Text>

  </TouchableOpacity>
  </View>
  </Animatable.View>

  );
};

const styles = StyleSheet.create({

container: {
             flex: 1,
             backgroundColor: '#fff',
            },

//----------------------- Arrow Back -----------------
Arrow: {
         marginTop: 20,
         color: '#000',
         marginLeft: 10,
        },

 //----------------------- Register Text Style ----------
register: {
           fontSize: 30,
           color: '#575DFB',
           fontWeight: 'bold',
           marginTop: 50,
           paddingLeft: 10,
          },

 //----------------------- Create Account Text Style -------
registerNow: {
               fontSize: 16,
               lineHeight: 24,
               paddingLeft: 10,
               fontWeight: 'bold',
                color: '#000',
                paddingTop: 20,
                textAlign: 'center',
              },

//----------------------- Email Text Style ------------
email: {
         color: '#000',
         fontSize: 15,
         paddingLeft: 20,
         marginTop: 40,
        },

//----------------------- Email TextBox Style ----------
emailBox: {
           borderWidth: 1,
           borderColor: '#575DFB',
           width: 360,
           alignSelf: 'center',
           borderRadius: 10,
           marginTop: 5,
           paddingLeft: 33,
  },

  //----------------------- Email Icon Style -------------

emailIcon: {
             position: 'absolute',
             left: 33,
             top: 80,
             color: '#575DFB',
             },

//----------------------- User Text Style ----------------
name: {
       color: '#000',
       fontSize: 15,
       paddingLeft: 20,
       marginTop: 30,
       },

//----------------------- User TextBox Style -------------
nameBox: {
           borderWidth: 1,
           borderColor: '#575DFB',
           width: 360,
           alignSelf: 'center',
           borderRadius: 10,
           marginTop: 5,
           paddingLeft: 33,
          },

//----------------------- User Icom Style -----------------
nameIcon: {
           position: 'absolute',
           left: 33,
           top: 68,
           color: '#575DFB',
           },

//----------------------- Password Text Style ----------
password: {
           color: '#000',
           fontSize: 15,
           paddingLeft: 20,
           marginTop: 30,
           },

//----------------------- Password TextBox Style --------
passwordBox: {
               borderWidth: 1,
               borderColor: '#575DFB',
               width: 360,
               alignSelf: 'center',
               borderRadius: 10,
               marginTop: 5,
               paddingLeft: 30,
               },

//----------------------- Password Icon Style -----------
passwordIcon: {
               position: 'absolute',
               left: 30,
               top: 68,
               color: '#575DFB',
              },

 //----------------------- Register Button Style ----------
registerButton: {
                 backgroundColor: '#575DFB',
                 width: 360,
                 height: 44,
                 alignSelf: 'center',
                 borderRadius: 10,
                 marginTop: 50,
                },

 //----------------------- Register Text Style ----------
  registerText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
    alignSelf: 'center',
  },

 //----------------------- Already Account Style ----------
alreadyAccount: {
                 color: '#000',
                 fontSize: 15,
                 fontWeight: 'bold',
                },

 //----------------------- Login Button Style -------------
login: {
         bottom: 20,
         left: 180,
         fontWeight: 'bold',
         color: '#575DFB',
         },

});

export default Register;
