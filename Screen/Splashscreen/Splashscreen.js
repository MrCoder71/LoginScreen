import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';


// Animation
import * as Animatable from 'react-native-animatable';

const Splashscreen = ({navigation}) => {

return (

  < View style = {styles.container} >

  {/* Welcom Title Text*/}
  <Animatable.Text animation = 'bounceInDown' style  = {styles.Welcome}> Welcome</Animatable.Text>

  
  {/* Motivational Quotes Text */}
  <Animatable.Text animation = 'fadeInDownBig' style = {styles.Opportunities}> " Opportunities Dont't Happen, You Create Them "</Animatable.Text>


  {/* Get Started Text */}
  <Animatable.Text animation = 'fadeInDownBig' style = {styles.Getstarted}> Let's Get Started ... </Animatable.Text>

 
  <View>

  {/* Animation  */}
  <Animatable.View animation='fadeInDownBig'>


  {/* Google TextBox */}
  <TouchableOpacity style={styles.Google}>


  {/* Google Image */}
  <Image style = {styles.GoogleLogo} source={require('../Splashscreen/Google.png')}/>


  {/* Google Text */}
  <Text style = { styles.GoogleText}> Continue With Google </Text>


  </TouchableOpacity>

  </Animatable.View>


  {/* Animation  */}
  <Animatable.View animation='fadeInDownBig'>


  {/* Facebook TextBox */}
  <TouchableOpacity style ={styles.Facebook}>


  {/* Facebook Image */}
  <Image style = {styles.FacebookLogo} source = {require('../Splashscreen/Facebook.png')}  />

  
  {/* Facebook Text */}
  <Text style = {styles.FacebookText}> Continue With Facebook</Text>


  </TouchableOpacity>
  </Animatable.View>


  {/* Animation */}
  <Animatable.View animation='fadeInDownBig'>


  {/* Email TextBox */}
  <TouchableOpacity style = {styles.Email}>


  {/* Email Logo  */}
  <Image style = {styles.EmailLogo} source = {require('../Splashscreen/Gmail.png')} />


  {/* Facebook Text */}
  <Text style = {styles.EmailText}> Continue With Email </Text>


  </TouchableOpacity>
  </Animatable.View>
  
  </View>

  <View style={{alignSelf:'center', marginTop:10}}>


  {/* Animation */}
  <Animatable.Text animation = 'fadeInDownBig' style = {styles.Alreadyaccount}> Already have an Account ?</Animatable.Text>


  <View>


  {/* Navigation Login Screen */}
  <TouchableOpacity style = {styles.Login} onPress = {() => navigation.navigate("Login")}> 


  {/* Login Text */}
  <Animatable.Text animation = 'fadeInDownBig' style = {styles.LoginText}> Login </Animatable.Text>


  </TouchableOpacity>
  </View>
  </View>


    
  </View>
  );
};

const styles = StyleSheet.create({

container : { 
             flex: 1 , 
             backgroundColor: '#fff' 
            } ,

//----------------------- Welcom Style -----------------
Welcome : { 
           fontSize: 70 , 
           marginTop: 150 , 
           color: '#575DFB' , 
           textAlign: 'center' , 
           fontWeight: 'bold' 
          },

//----------------------- Motivational Quotes Style ------
Opportunities : { 
                 marginTop: 20 , 
                 fontSize: 25 , 
                 color: '#000000' , 
                 textAlign: 'center' , 
                 fontWeight: 'bold' 
                },

 
//----------------------- Get Startes Style --------------
Getstarted : { 
               fontSize: 18 , 
               marginTop: 40 , 
               fontWeight: 'bold' , 
               color: '#000000' , 
               paddingLeft: 10 
              },


//----------------------- Google TextBox Style -----------
Google : { 
           borderWidth: 1 ,
           marginTop: 20 , 
           width: 350 , 
           height: 60 , 
           alignSelf: 'center' , 
           borderRadius: 20  
          },

//----------------------- Google Logo Style --------------
GoogleLogo : { 
               marginLeft: 10 , 
               marginTop: 10 
              },

//----------------------- Google Text Style --------------
GoogleText: {  
             marginLeft: 80 , 
             fontWeight: 'bold' , 
             color: '#000000' , 
             marginTop: -30 , 
             fontSize: 18 
            },

//----------------------- Facebook TextBox Style ----------
Facebook : { 
             borderWidth: 1 , 
             marginTop: 20 , 
             width: 350 , 
             height: 60 , 
             alignSelf: 'center', 
             borderRadius: 20 
            },

//----------------------- Facebook Logo Style -------------
FacebookLogo : { 
                 marginLeft: 2 , 
                 marginTop: 10 
                },

//----------------------- Facebook Text Style -------------
FacebookText : {
                 marginLeft: 80 , 
                 fontWeight: 'bold' , 
                 color: '#000000' , 
                 marginTop: -30, 
                 fontSize: 18 
                },

//----------------------- Email TextBox Style -------------
Email : {
         borderWidth: 1 , 
         marginTop: 20 , 
         width: 350 , 
         height: 60 , 
         alignSelf: 'center' , 
         borderRadius: 20 
        },

//----------------------- Email Logo Style ----------------
EmailLogo : {
             marginLeft: 10 , 
             marginTop: 15 , 
             width: 25 , 
             height: 20 
            },

//----------------------- Email Text Style ----------------
EmailText : { 
             marginLeft: 80 , 
             fontWeight: 'bold' , 
             color: '#000000' , 
             marginTop: -22 , 
             fontSize: 18 
            },

//----------------------- Already Account Text Style ------
Alreadyaccount : { 
                   fontWeight: 
                   'bold', 
                   color: '#000' , 
                   marginTop: 20 
                  },

//----------------------- Login Navigation Style ----------
Login : { 
         marginTop: -20 , 
         marginLeft: 170 , 
         fontWeight: 'bold', 
        },

//----------------------- Login Text Style ----------------
LoginText: { 
             fontWeight: 'bold' , 
             color: '#575DFB' , 
             marginLeft:5 
            },

});

export default Splashscreen;
