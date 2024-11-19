import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from '../utils/QuestionContext';
import axios from 'axios';
import { SECRET_KEY } from '../utils/apiConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Result = () => {
  const router = useRouter();
  const [careerSuggestions, setCareerSuggestions] = useState([]);
  const {answers} = useContext(QuestionContext);
  const [loading, setLoading] = useState(false);
 
  const sendToOpenAI = async (answers) => {
    try {
      
      const apiKey = SECRET_KEY;
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{"role":"user","content":generatePrompt(answers)}], // Create a dynamic prompt based on answers
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
  
      console.log('AI Response:', response.data.choices[0].message.content);
      setCareerSuggestions(response.data.choices[0].message.content);
      setLoading(false)
      // console.log('AI Response:', response);
    } catch (error) {
      console.error('Error sending data to OpenAI:', error);
      setLoading(false)
    }
  };

  const generatePrompt = (answers) => {
    // Format the answers into a prompt string for OpenAI
    return `Based on the following answers, suggest a personalized career path:
    1. What type of tasks do you enjoy most? ${answers["TPslaKJdjx6y"]}
    2. How would you describe your ideal work environment? ${answers["l96Uusdb06tk"]}
    3. How comfortable are you with using technology in your work? ${answers["yjwb3Eai5K9v"]}
    4. What motivates you most in your work? ${answers["jPJ1L48JOofl"]}
    5. How do you feel about working with people? ${answers["nP7o7ZlfOsPD"]}
    6. How would you describe your problem-solving style? ${answers["RoHqWeg3FJUl"]}
    7. Which of the following values is most important to you in a career? ${answers["LBOObAhX2NjC"]}`;
  };

  const calculate = () => {
    const result = sendToOpenAI(answers);

    // return result;
  }

  useEffect(() => {
    setLoading(true)
    calculate();
  },[])

  
  return (
    <View style={{ flex:1, paddingHorizontal: 30,justifyItems:'center',paddingTop: 140 }}>
      <Spinner visible={loading} />
      <Text style={{ fontSize: 30,marginBottom: 20 }}>AI Response</Text>
      <Text style={{ fontSize: 18, textAlign:'justify', marginBottom: 20, lineHeight:35 }}>{careerSuggestions}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => router.replace('/(tabs)/favourite')}>
        <Text style={styles.btnText}>Back to Career Path</Text>
      </TouchableOpacity>
      {/* <Button style={{ color:'red' }} title='Back to Career Path' onPress={() => router.replace('/(tabs)/favourites')} /> */}
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
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