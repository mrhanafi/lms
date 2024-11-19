import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { getTypeformQuestions } from '../utils/apiservices'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import QuestionCard from '../components/QuestionCard';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { QuestionContext } from '../utils/QuestionContext';
import services from '../utils/services';
import { Colors } from '@/constants/Colors';

const Question = () => {
    const router = useRouter();
    // const [questions, setQuestions] = useState([]);
  // const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState();

    const {handleAnswerChange,answers,questions} = useContext(QuestionContext);
    
    // const fetchQuestion = async () => {
    //     const set = await services.getData('questions');
    //     setQuestions(JSON.parse(set));
    //     console.log(questions);
    // }

    useEffect(()=>{
        // fetchQuestions;
        // handleAnswerChange
        answers
    },[answers])

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, marginBottom: 20 }}>1. {questions[0]?.title}</Text>
        {questions[0]?.properties?.choices.map((option,index) => (
                    <QuestionCard key={option.id} 
                    label={option.label} 
                    answerId={option.id} 
                    questionId={questions[0]?.id} 
                    selected={selected}
                    setSelected={setSelected}
                    handleAnswerChange={handleAnswerChange} />

                ))}
                <TouchableOpacity style={styles.btn} onPress={() => router.push('/question2')} >
        <Text style={styles.btnText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Question

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