import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import Welcome from './pages/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="WelcomePage"
          component={Welcome}
          options={{
            title: 'Welcome',
            headerStyle:{backgroundColor:"#FCD63B"},
            headerTitleStyle:{color:"white"},
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Products',
            headerStyle:{backgroundColor:"#FCD63B"},
            headerTitleStyle:{color:"white"},
            headerTintColor:"white",
            headerTitleAlign:"center"
          }}
        />
        <Stack.Screen name="DetailPage" component={Detail} options={{
            title: 'Product Detail',
            headerStyle:{backgroundColor:"#FCD63B"},
            headerTitleStyle:{color:"white"},
            headerTintColor:"white",
            headerTitleAlign:"center"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
