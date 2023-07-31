import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, restaurants, description}) => {
  return (
    <View className=''>
      <View className='flex-row justify-between items-center px-4'>
        <View className=''>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='text-gray-500 text-xs'>{description}</Text>
        </View>
        <TouchableOpacity onPress={() => ''} className=''>
          <Text className={`text-[${themeColors.text}] font-semibold`}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className='overflow-visible py-3'
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {
          restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
                key={index}
                restaurant={restaurant}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow