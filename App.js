import React from "react";
import { StatusBar} from 'react-native';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Splashscreen from "./Screen/Splashscreen/Splashscreen";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import Verification from "./Screen/Verification/Verification";
import Home from "./Screen/Home/Home";
import Forgot from "./Screen/Forgot/Forgot";
import Forgotverification from "./Screen/Forgotverification/Forgotverification";
import ForgotNewPassword from "./Screen/Forgotnewpassword/Forgotnewpassword";


const Stack = createNativeStackNavigator();

const App = () => {
return (
  <NavigationContainer>
      
  <StatusBar backgroundColor="#fff" barStyle="dark-content" />

  <Stack.Navigator>

  <Stack.Screen name="Splashscreen" component={Splashscreen} options={{headerShown: false}} />

      
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>

  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>

  <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }}/>

  <Stack.Screen name="Home"  component={Home} options={{headerShown:false}}/>

  <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}}/>

  <Stack.Screen name="Forgotverification" component={Forgotverification} options={{headerShown:false}}/>

  <Stack.Screen name="ForgotNewPassword"  component={ForgotNewPassword} options={{headerShown:false}}/>


  </Stack.Navigator>

</NavigationContainer>

  );
};

export default App;
