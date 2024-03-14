import React from 'react';
import { Text , View , TouchableOpacity , StyleSheet , TextInput } from 'react-native';

// Import Vector Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Import Animation
import * as Animatable from 'react-native-animatable';


const ForgotNewPassword = ({navigation}) => {
return (

  <Animatable.View animation = 'zoomIn' style = {styles.container}>


  {/* Back Arrow Navigation */}
  <TouchableOpacity onPress = {() => navigation.navigate('Forgotverification')}>
  
  
  {/* Back Arrow Icon */}
  <AntDesign style = {styles.arrow} name = "arrowleft" size={30} />
      
  </TouchableOpacity>
  

  {/* Forgot Password Text  */}
  <Text style = {styles.Forgot}>Forgot Password?</Text>
  

  {/* Change  Password  */}
  <Text style = {styles.ForgotText}> Set your new password to login into your account!
      
  </Text>
     
  <View>

  {/* Enater New  Password  */}
    
  <Text style = {styles.Enternewpassword}> Enter New Password </Text>


  <View style={styles.inputContainer}>

  {/* Password TexBox  */}
  <TextInput style = {styles.input} placeholder = "**********" secureTextEntry={true} placeholderTextColor = "#999" />
   

  {/* Locked Icon  */}
  <Fontisto style = {styles.icon} name="locked" size = {20} />
    

  </View>
  
  </View>
  
  {/* Submit Navigation  */}
  <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.navigate('Login')}>

 
  {/* Submit Text  */}
   <Text style={styles.submitText}>Submit</Text>
   
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
arrow: {
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
             alignSelf: 'center',
            },

//----------------------- New Password  Style ---------------
Enternewpassword: {
                   color: '#000',
                   fontSize: 15,
                   paddingLeft: 20,
                   marginTop: 40,
                  },

//----------------------- New Password  Style ---------------  
inputContainer: {
                 position: 'relative',
                 marginTop: 5,
                 width: 360,
                 alignSelf: 'center',
                },

//----------------------- PasswordTextBox  Style -------------              
input: {
         borderWidth: 1,
         borderColor: '#575DFB',
         borderRadius: 10,
         padding: 10,
         textAlign: 'center',
        },

//----------------------- Password Icon Style ---------------      
icon: {
       position: 'absolute',
       left: 10,
       top: 10,
       color: '#575DFB',
      },

//-----------------------  Submit TextBox  Style ---------------
submitButton: {
               backgroundColor: '#575DFB',
               width: 360,
               height: 44,
               alignSelf: 'center',
               borderRadius: 10,
               marginTop: 30,
              },


//----------------------- Submit Text  Style ---------------
submitText: {
             color: '#FFF',
             fontWeight: 'bold',
             fontSize: 18,
             marginTop: 8,
             alignSelf: 'center',
            },
  
});

export default ForgotNewPassword;
