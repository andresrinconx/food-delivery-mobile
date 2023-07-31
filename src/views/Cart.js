import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon, MinusIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'
import { featured } from '../constants'

const Cart = () => {
  const navigation = useNavigation()
  const restaurant = featured.restaurants[0]

  return (
    <View className='bg-white flex-1 mt-2'>
      {/* back buttom */}
      <View className='relative py-4' style={styles.shadow}>
        <TouchableOpacity onPress={() => navigation.goBack()} className={`bg-[${themeColors.text}] absolute top-5 left-2 z-10 rounded-full p-1`}>
          <ArrowLeftIcon size={25} color='white' />
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your cart</Text>
          <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View className='flex-row items-center px-4 mb-4' 
        style={{backgroundColor: themeColors.bgColor(0.2),}}
      >
        <Image source={require('../assets/images/bikeGuy.png')} style={{width: 80, height: 80,}} />
        <Text className='flex-1 pl-4'>Deliver in 20 mins</Text>
        <TouchableOpacity onPress={() => ''} className=''>
          <Text className={`text-[${themeColors.text}] font-bold`}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50, // el pading de abajo cuando terminas el scroll
        }}
      >
        {
          restaurant.dishes.map((dish, index) => {
            return (
              <View className='flex-row items-center space-x-3 py-2 px-4 bg-white rouded-3xl mx-2 mb-3 rounded-2xl' 
                style={styles.shadow}
                key={index}
              >
                <Text className={`text-[${themeColors.text}] font-bold`}>2 x</Text>
                <Image source={dish.image} style={{width: 55, height: 55,}} className='rounded-full' />
                <Text className='font-bold text-gray-700 flex-1'>{dish.name}</Text>
                <Text className='font-semibold text-base'>${dish.price}</Text>
                <TouchableOpacity onPress={() => ''} className={`bg-[${themeColors.text}] rounded-full p-1`}>
                  <MinusIcon size={20} color='white' />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>

      {/* totals */}
      <View className='p-6 px-8 rounded-2xl space-y-3' style={{backgroundColor: themeColors.bgColor(0.2),}}>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Subtotal</Text>
          <Text className='text-gray-700'>$20</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Delivery fee</Text>
          <Text className='text-gray-700'>$10</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700 font-extrabold'>Order total</Text>
          <Text className='text-gray-700 font-extrabold'>$30</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => ''} className={`p-3 rounded-full bg-[${themeColors.text}]`}>
            <Text className='text-white text-center font-bold text-lg'>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
})

export default Cart