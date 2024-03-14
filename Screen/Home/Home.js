import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import * as Animatable from 'react-native-animatable';

const Home =() => {
 
return (

  <Animatable.View animation='zoomIn' style={styles.container}>
      
  <Animatable.Text animation='bounceInDown'duration={3000}  style = {styles.Welcome}> Welcome</Animatable.Text>
      
  <Animatable.Text animation='bounceInDown'duration={3000}  style = {styles.To}> TO </Animatable.Text>

  <Animatable.Text animation='bounceInDown'duration={3000}  style = {styles.Home}> Home </Animatable.Text>
      
  <Animatable.Text animation='bounceInDown'duration={3000}  style = {styles.Screen}> Screen </Animatable.Text>

  <Animatable.Text animation='bounceInDown'duration={3000}  style = {styles.Comingsoon}> Coming soon Feature </Animatable.Text>

  </Animatable.View>

  
    );
  };

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    Welcome: {
      fontSize: 70,
      marginTop: 170,
      color: '#575DFB',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    To: {
      fontSize: 70,
      
      color: '#575DFB',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    Home:{
      fontSize: 70,
      color: '#575DFB',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    Screen:{
      fontSize: 70,
      color: '#575DFB',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    Comingsoon:{
      
        fontSize: 30,
        marginTop:40,
        color: '#575DFB',
        textAlign: 'center',
        fontWeight: 'bold',
        color:'red'  
    }
  });
export default Home;

