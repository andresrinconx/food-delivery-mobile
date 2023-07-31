import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'

import Categories from '../components/Categories'
import { featured } from '../constants'
import FeaturedRow from '../components/FeaturedRow'

const Home = () => {
  return (
    <View className='bg-white pt-2'>

      {/* search bar */}
      <View className='flex-row items-center space-x-2 px-4 pb-2'>
        <View className='flex-row flex-1 items-center px-3 py-1 rounded-full border border-gray-300'>
          <MagnifyingGlassIcon size={25} color='gray' />
          <TextInput className='ml-2 flex-1'
            placeholder='Restaurants'
          />
          <View className='flex-row items-center space-x-1 border-gray-300 border-0 border-l-2 pl-2'>
            <MapPinIcon size={30} color='gray' />
            <Text className='text-gray-600'>New York, NYC</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className='bg-gray-300 p-3 rounded-full'>
          <AdjustmentsVerticalIcon size={25} color='white' />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ // estilos que envuelven el contenido
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />
      
        {/* featured */}
        <View className='mb-10'>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home