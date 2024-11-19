import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useRouter } from 'expo-router';
import { QuestionContext } from '../utils/QuestionContext';
import QuestionCard from '../components/QuestionCard';
import { Colors } from '@/constants/Colors';

const Question6 = () => {
    const router = useRouter();
    const {handleAnswerChange,questions} = useContext(QuestionContext);
    const [selected, setSelected] = useState();
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, marginBottom: 20 }}>6. {questions[5]?.title}</Text>
        {questions[5]?.properties?.choices.map((option,index) => (
                    <QuestionCard key={option.id} 
                    label={option.label} 
                    answerId={option.id} 
                    questionId={questions[5]?.id} 
                    selected={selected}
                    setSelected={setSelected}
                    handleAnswerChange={handleAnswerChange} />

                ))}
      <TouchableOpacity style={styles.btn} onPress={() => router.push('/question7')} >
        <Text style={styles.btnText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Question6

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