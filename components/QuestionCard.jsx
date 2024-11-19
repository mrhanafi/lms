import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

const QuestionCard = ({label, questionId,answerId,handleAnswerChange,selected,setSelected}) => {
    
  return (
    <TouchableOpacity style={[styles.container,selected === answerId ? {borderWidth: 1, borderColor:Colors.primary} : {borderWidth: 1, borderColor:Colors.lightblue} ]} onPress={() => {handleAnswerChange(questionId,label),setSelected(answerId)}}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginVertical: 5
    }
});