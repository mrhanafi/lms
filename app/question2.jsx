import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { useRouter } from 'expo-router';
import { QuestionContext } from '../utils/QuestionContext';
import { Colors } from '@/constants/Colors';

const Question2 = () => {
    const router = useRouter();
    const {handleAnswerChange,questions} = useContext(QuestionContext);
    const [selected, setSelected] = useState();
   
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, marginBottom: 20 }}>2. {questions[1]?.title}</Text>
        {questions[1]?.properties?.choices.map((option,index) => (
                    <QuestionCard key={option.id} 
                    label={option.label} 
                    answerId={option.id} 
                    questionId={questions[1]?.id} 
                    selected={selected}
                    setSelected={setSelected}
                    handleAnswerChange={handleAnswerChange} />

                ))}
                <TouchableOpacity style={styles.btn} onPress={() => router.push('/question3')} >
        <Text style={styles.btnText}>Next Question</Text>
      </TouchableOpacity>
      {/* <Button title="Next" onPress={() => router.push('/question3')} /> */}
    </View>
  )
}

export default Question2


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 60
    },
    btn: {
      backgroundColor: Colors.primary,
      paddingVertical: 10,
      borderRadius: 10
    },
    btnText: {
      color: Colors.white,
      textAlign: 'center'
    }
});