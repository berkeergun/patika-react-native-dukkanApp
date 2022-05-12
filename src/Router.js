import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(selector => selector.user);
  const isAuthLoading = useSelector(selector => selector.isAuthLoading);
  const dispatch = useDispatch()

  return (
    <NavigationContainer>
        {isAuthLoading ? (
          <Loading />
        ) 
        : !userSession ? (
          <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen
              name="WelcomePage"
              component={Welcome}
              options={{
                title: 'Welcome',
                headerStyle: {backgroundColor: '#FCD63B'},
                headerTitleStyle: {color: 'white'},
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LoginPage"
              component={Login}
              options={{
                title: 'Login',
                headerStyle: {backgroundColor: '#FCD63B'},
                headerTitleStyle: {color: 'white'},
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'Products',
                headerStyle: {backgroundColor: '#FCD63B'},
                headerTitleStyle: {color: 'white'},
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerRight: () => 
                <Icon name="logout" size={30} color="white" onPress={()=>dispatch({type:"REMOVE_USER"})} />
              }}
            />
            <Stack.Screen
              name="DetailPage"
              component={Detail}
              options={{
                title: 'Product Detail',
                headerStyle: {backgroundColor: '#FCD63B'},
                headerTitleStyle: {color: 'white'},
                headerTintColor: 'white',
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
