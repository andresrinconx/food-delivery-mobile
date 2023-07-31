import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'

const DishRow = ({item}) => {
  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl mb-3 mx-2' style={styles.shadow}>
      <Image source={item.image} style={{width: 100, height: 100,}} className='rounded-3xl' />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{item.name}</Text>
          <Text className='text-gray-700'>{item.description}</Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${item.price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity onPress={() => ''} className={`bg-[${themeColors.text}] p-1 rounded-full`}>
              <MinusIcon size={20} color='white' />
            </TouchableOpacity>
            <Text className='px-3'>{2}</Text>
            <TouchableOpacity onPress={() => ''} className={`bg-[${themeColors.text}] p-1 rounded-full`}>
              <PlusIcon size={20} color='white' />
            </TouchableOpacity>
          </View>
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

export default DishRow