import React from 'react';
import {View,StyleSheet,Text, TouchableOpacity, TextInput,Image} from 'react-native';

// Vector Icon Import
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto  from 'react-native-vector-icons/Fontisto';
import Ionicons  from 'react-native-vector-icons/Ionicons';

// Animation 
import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {

return (

  <Animatable.View animation='zoomIn' style={styles.container}>

  {/* Back Arrow */}
  <TouchableOpacity TouchableOpacity onPress = {() => navigation.navigate('Splashscreen')}>


  {/* Back Arrow Icon */}
  <AntDesign style = {styles.Arrow} name = 'arrowleft' size = {30}/>


  </TouchableOpacity>

  {/* Login Text */}
  <Text style = {styles.Login}> Login </Text>


  {/* Login Text */}
  <Text style = {styles.Loginnow}> Login now to track all your expenses and income place!</Text>


  <View>

  {/* Email Text */}
  <Text style = {styles.Email}> Email </Text>


  {/* Email TextBox */}
  <TextInput style = {styles.Emailbox} placeholder='Coder@gmail.com' keyboardType='email-address' />


  {/* Email Icon */}
  <Fontisto  style = {styles.Emailicon} name="email" size={20}/>
                
  </View>
     
  <View>

  {/* Password Text */}
  <Text style = {styles.Password}> Password </Text>


  {/* Password TextBox */}
  <TextInput style = {styles.Passwordbox} placeholder = '**********' secureTextEntry = {true} />


  {/* Password Icon */}
  <Ionicons style = {styles.Passwordicon} name = 'lock-closed-outline' size = {20} />


  </View>

  {/* Navigation  Forgot Screen */}
  <TouchableOpacity onPress = {() => navigation.navigate('Forgot')}>


  {/* Forgot Text */}
  <Text style = {styles.Forgotpassword}> Forgot password ? </Text>


  </TouchableOpacity>

  {/* Login TextBox */}
  <TouchableOpacity style={styles.LoginButton} onPress={()=> navigation.navigate( 'Home')}> 


  {/* Login Text */}
  <Text style = {styles.LoginText}>Login</Text>

            
  </TouchableOpacity>

  {/* Line */}
  <TextInput style = {styles.Line}/>


  {/* Google TextBox */}
  <TouchableOpacity style={styles.Google}>

  
  {/* Google Logo */}
  <Image style = {styles.GoogleLogo} source = {require('../Login/Google.png')} />

   
  {/* Google Text */}
  <Text style = {styles.GoogleText}> Continue With Email </Text>


  </TouchableOpacity>

  {/* Algin  Text */}
  <View style = {{marginLeft:90, marginTop:25 }} >


  {/* Don't  Have Account Text */}
  <Text style = {styles.dontaccount}> Don’t have an account?</Text>

   
  {/* Navigation Register Screen */}
  <TouchableOpacity onPress={() => navigation.navigate("Register")}>


  {/* Register Text  */}
  <Text style ={styles.Register}>Register</Text>
  
  
  </TouchableOpacity>
  </View>
  </Animatable.View>
  );
};

const styles = StyleSheet.create({

container: { flex: 1 , backgroundColor: '#fff' } ,

//----------------------- Arrow Back -----------------
Arrow: {
         marginTop: 20 ,
         color: '#000' ,
         marginLeft: 10 
        },


//----------------------- Login Style -----------------
Login: { 
         fontSize: 30 ,
         color: '#575DFB' ,
         fontWeight: 'bold' , 
         marginTop: 50 , 
         paddingLeft: 10 
        },


//----------------------- Login Style -----------------
Loginnow: { 
           fontSize: 16 , 
           lineHeight: 24 , 
           fontWeight: 'bold' , 
           color: '#000' , 
           paddingTop: 20 , 
           alignSelf:'center' 
          },

//----------------------- Email Text Style ------------
Email: { 
         color: '#000' , 
         fontSize: 15 , 
         paddingLeft: 20 , 
         marginTop: 40  
        },

//----------------------- Email TextBox Style ----------
Emailbox: { 
           borderWidth: 1 , 
           borderColor: '#575DFB' , 
           width: 360 , 
           alignSelf: 'center' , 
           borderRadius: 10 ,
           marginTop: 5 , 
           paddingLeft: 33  
          },

//----------------------- Email Icon Style -------------
Emailicon: { 
             position: 'absolute' , 
             left: 33 , 
             top: 80 , 
             color: '#575DFB' 
            },

//----------------------- Password Text Style ----------
Password: { 
           color: '#000' , 
           fontSize: 15 , 
           paddingLeft: 20 , 
           marginTop: 40 
          },

//----------------------- Password TextBox Style --------
Passwordbox: { 
               borderWidth: 1 , 
               borderColor: '#575DFB' , 
               width: 360 , 
               alignSelf: 'center' , 
               borderRadius: 10 , 
               marginTop: 5 , 
               paddingLeft: 30 
              },

//----------------------- Password Icon Style -----------
Passwordicon: { 
               position: 'absolute' , 
               left: 30 , 
               top: 80 , 
               color: '#575DFB' 
              },

//----------------------- Forgot Text Style -------------
Forgotpassword: { 
                 color: '#575DFB' ,
                 marginTop: 10 , 
                 left: 30 
                },

//----------------------- Login TextBox Style -----------
LoginButton: { 
               backgroundColor: '#575DFB' , 
               width: 360 , 
               height: 44 , 
               alignSelf: 'center' , 
               borderRadius: 10 , 
               marginTop: 50 
              },

//----------------------- Login Text Style --------------
LoginText: { 
             color: '#FFF' , 
             fontWeight: 'bold' , 
             fontSize: 18 , 
             marginTop: 8 , 
             alignSelf: 'center' 
            },

//----------------------- Line  Style -------------------
Line: { 
       borderBottomColor: '#000' , 
       borderBottomWidth: 1 , 
       width: 370 ,  
       alignSelf: 'center' 
      },


//----------------------- Google TextBox Style ----------
Google: { 
         borderWidth: 1 , 
         marginTop: 20 , 
         width: 350 , 
         height: 60 , 
         alignSelf: 'center' , 
         borderRadius: 20 ,
        },

//----------------------- Google Logo Style ------------
GoogleLogo: { 
             marginLeft: 10 , 
             marginTop: 10 
            },

//----------------------- Google Text Style ------------
GoogleText: { 
             marginLeft: 80 , 
             fontWeight: 'bold' , 
             color: '#000000' , 
             marginTop: -30 , 
             fontSize: 18  
            },

//----------------------- Don't Have Account Text Style -
dontaccount: { 
               color: '#000' , 
               fontSize: 15 , 
               fontWeight: 'bold' 
             },

//----------------------- Register Text Style -----------
Register: { 
           bottom: 20 , 
           left: 165 , 
           fontWeight: 'bold' , 
           color: '#575DFB' 
          },

});
export default Login;
