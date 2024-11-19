import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getCategories } from '../utils/apiservices'
import { useFocusEffect } from 'expo-router';
import { Colors } from '@/constants/Colors'

const Categories = ({catItem,selectedCategory,onCategoryPress,id}) => {

  return (
    <View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={catItem}
        renderItem={({item}) => {
            const selected = selectedCategory === item?.category_name;
            // console.log(selected);
            return (
            <TouchableOpacity 
            style={[styles.categoryContainer,selected ? {backgroundColor: Colors.primary} : {}]} 
            onPress={() => onCategoryPress(item.category_name)}>
                <Text style={[styles.categoryText,selected ? {color: Colors.white} : {}]}>{item.category_name}</Text>
            </TouchableOpacity>)
        }}
        />

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 5,
        width: '100%'
    },
    categoryContainer: {
        backgroundColor: Colors.veryLightGrey,
        borderRadius: 10,
        padding: 7,
        marginBottom: 20,
        marginHorizontal: 3
    },
    categoryText: {
        color: Colors.softText
    },

});