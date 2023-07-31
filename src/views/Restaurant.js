import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'

import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'

const Restaurant = () => {
  const navigation = useNavigation()
  
  const { params } = useRoute()
  let item = params
  // console.log('restaurant:', item)

  return (
    <View className=''>
      <CartIcon />
      <ScrollView>
        
        <View className='relative'>
          <Image source={item.image} style={{width: '100%', height: 300,}} />
          <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-4 left-3 bg-gray-50 p-2 rounded-full'>
            <ArrowLeftIcon size={25} color={`${themeColors.text}`} />
          </TouchableOpacity>
        </View>

        <View className='bg-white -mt-12 pt-6' style={{borderTopLeftRadius: 40, borderTopRightRadius: 40,}}>
          <View className='px-5'>
            <Text className='text-3xl fonb-bold'>{item.name}</Text>
            <View className='flex-row items-center justify-between space-x-1'>
              <View className='flex-row items-center space-x-1'>
                <Image source={require('../assets/images/fullStar.png')} style={{width: 16, height: 16,}} />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{item.stars}</Text>
                  <Text className='text-gray-700'>
                    ({item.reviews} reviews) · <Text className='font-semibold'>{item.category}</Text>
                  </Text>
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <MapPinIcon size={20} color='gray' />
                <Text className='text-gray-700 text-xs'>Nearby: {item.address}</Text>
              </View>
            </View>
            <Text className='mt-2 text-gray-500'>{item.description}</Text>
          </View>
        </View>

        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>

          {/* dishes */}
          {
            item.dishes.map((dish, index) => {
              return (
                <DishRow 
                  item={{...dish}} 
                  key={index} 
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Restaurant