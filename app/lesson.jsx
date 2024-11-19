import { View, Text, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLocalSearchParams, useRouter } from 'expo-router';
import YoutubePlayer from "react-native-youtube-iframe";
import { getCourseById } from '../utils/apiservices';
import LessonSection from '../components/LessonSection';
import ChapterBtn from '../components/ChapterBtn';

const Lesson = () => {
    const router = useRouter();
    const [data, setData] = useState();
    const [playing, setPlaying] = useState(false);
    const [videoId, setVideoId] = useState('');
    
    const {documentId} = useLocalSearchParams();

    // console.log(documentId);
    const fetchCourse = async (id) => {
        const course = await getCourseById(id);
        console.log(data?.Chapter[0]?.videoId)
        setData(course?.data?.data);
        setVideoId(data?.Chapter[0]?.videoId)
            return course?.data?.data;
    }

    const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
    }, []);
    
    const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    }, []);
    
    useEffect(() => {
        fetchCourse(documentId);
    },[])
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="left" size={30} color="black" style={styles.backBtn} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataContainer}>
              <YoutubePlayer
                height={200}
                play={playing}
                videoId={videoId}
                onChangeState={onStateChange}
            />
              <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
              {/* <Button title="test" onPress={() => fetchCourse(documentId)}/> */}
              <View>
                  <Text style={{ fontWeight:'bold', fontSize:18,marginBottom:20,marginTop: 20 }}>Chapters</Text>
                  {/* <LessonSection chapters={data?.Chapter}/> */}
                  <ChapterBtn chapters={data?.Chapter} setVideoId={setVideoId } />
            </View>
          </View>
    </View>
  )
}

export default Lesson

const styles = StyleSheet.create({
container: {
        flex: 1,
        backgroundColor: 'white'
    },
     headerContainer: {
        // flex: 2,
        // backgroundColor: 'green'
    },
     backBtn: {
         marginLeft: 30,
         marginTop: 60
        // position: 'absolute',
        // bottom: 220,
        // backgroundColor: 'black'
    },
     dataContainer: {
        // flex: 5,
        paddingHorizontal: 20,
        paddingTop:10,
        backgroundColor: 'white'
    },
});