import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
  const navigation = useNavigation()

  return (
    <View className='absolute bottom-5 w-full z-50'>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} 
        className='flex-row justify-between items-center py-3 p-4 mx-5 rounded-full' 
        style={[{backgroundColor: themeColors.text}, styles.shadow]}
      >
        <View className='p-2 px-4 rounded-full' style={{backgroundColor: 'rgba(255, 255, 255, .3)',}}>
          <Text className='color-white font-extrabold'>3</Text>
        </View>
        <Text className='color-white font-extrabold'>View Cart</Text>
        <Text className='color-white font-extrabold'>${23}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  }
})

export default CartIcon