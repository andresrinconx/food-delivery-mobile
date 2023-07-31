import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({restaurant}) => {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {...restaurant})} className=''>
      <View style={styles.shadow} className='mr-6 mb-3 bg-white rounded-3xl shadow-lg'>
        <Image className='rounded-t-3xl' source={restaurant.image} style={{width: 300, height: 180,}} />
        <View className='px-3 pb-4 space-y-2'>
          <Text className='text-lg font-bold pt-2'>{restaurant.name}</Text>

          <View className='flex-row items-center space-x-1'>
            <Image source={require('../assets/images/fullStar.png')} style={{width: 16, height: 16,}} />
            <Text className='text-xs'>
              <Text className='text-green-700'>{restaurant.stars}</Text>
              <Text className='text-gray-700'>
                ({restaurant.reviews} reviews) · <Text className='font-semibold'>{restaurant.category}</Text>
              </Text>
            </Text>
          </View>

          <View className='flex-row items-center space-x-1'>
            <MapPinIcon size={20} color='gray' />
            <Text className='text-gray-700 text-xs'>Nearby: {restaurant.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: themeColors.text,
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default RestaurantCard