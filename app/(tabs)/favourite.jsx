import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { useFocusEffect, useRouter } from 'expo-router';
import { getTypeformQuestions } from '../../utils/apiservices';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import services from '../../utils/services';
import { QuestionContext } from '../../utils/QuestionContext';

const Favourite = () => {
  const [questions, setQuestions] = useState([]);
  const [ready,setReady] = useState(false);
  const router = useRouter();
  
  const {fetchQuestions,setAnswers} = useContext(QuestionContext);
useFocusEffect(
  useCallback(() => {
    const onFetchQuestion = async () => {
      const set = await getTypeformQuestions();
      setQuestions(set);
      services.storeData('questions',JSON.stringify(set));
      setAnswers({});
      setReady(true);
  }
  onFetchQuestion();
  fetchQuestions();

  }, [])
)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Want to know your future career path?</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 50 }}>Let's see what AI can suggest for you</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 50 }}>Take a quiz and see your result!</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={() => router.push('/question')}>
      {ready ? (
        <Text style={{ fontSize: 18, color: Colors.white }}>Let's go!</Text>

      ) : (
        <EvilIcons name="spinner-3" size={24} color="white" style={{ transform: [{rotateY: '180deg'}] }} />
        )}
        </TouchableOpacity>

    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10
  }
});