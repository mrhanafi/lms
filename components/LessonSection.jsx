import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

const LessonSection = ({chapters}) => {
    return (
        <>
            {chapters?.map((item, index) => (
                <View style={styles.container} key={index}>
                    <Text style={styles.index}>{index+1 }</Text>
                {/* <Text>{ item?.name}</Text> */}
                <Text style={styles.title}>{ item?.name}</Text>
            </View>
                
            ))}
      
      </>
  )
}

export default LessonSection

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 7,
        marginVertical: 5
    },
    index: {
        fontSize: 17,
        padding: 10,
        backgroundColor: Colors.primary,
        borderRadius: 99,
        width: 40,
        height: 40,
        textAlign: 'center',
        color: 'white'
    },
    title: {
        fontSize: 16
    }
});