import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import Restaurant from '../views/Restaurant'
import Cart from '../views/Cart'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />
        <Stack.Screen name='Restaurant' component={Restaurant} options={{headerShown: false, title: 'Restaurant' }}/>
        <Stack.Screen name='Cart' component={Cart} options={{headerShown: false, title: 'Cart', presentation: 'containedTransparentModal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation