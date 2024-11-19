import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { getAuthUser, getCourseById, getCourseUser } from '../utils/apiservices';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import LessonSection from '../components/LessonSection';
import services from '../utils/services';

const CourseDetails = () => {
    const router = useRouter();
    const [data, setData] = useState();
    const [isEnrolled, setIsEnrolled] = useState(false);
    const {documentId} = useLocalSearchParams();
    
    const fetchCourse = async (id) => {
        const course = await getCourseById(id);
            setData(course?.data?.data);
            // console.log(course?.data?.data)
            return course?.data?.data;
    }

    // const determineIsEnabled = async () => {
    //     // const user = await services.getData('user');
    //     const populateCourse = await getAuthUser();
    //     // console.log(populateCourse?.data?.data[0]?.courses[1].title)
    //     console.log(populateCourse?.data?.courses);
    //     for (let courseObj of populateCourse?.data?.courses) {
    //         // console.log(courseObj.id)
    //         if (courseObj?.id === data?.id) {
    //             // setIsEnrolled(true);
    //             console.log('true');
    //         }
    //     }
    //     // populateCourse?.data?.courses.map((item) => {
            
    //     //     //  if (item?.id === data?.id) {
    //     //     //     // setIsEnrolled(true);
    //     //     //     console.log(item.id);
    //     //     // }
    //     //     console.log(data.id)
    //     //     console.log(item.title)
    //     // })
    //     console.log(data.id)
    //     console.log('testtest')
    //     // console.log(populateCourse?.data?.data[0]?.courses)
    // }
    const goToLesson = (item) => {
        router.push({
            pathname: '/lesson',
            params: {documentId:item.documentId}
        });
    }

    useEffect(() => {
        fetchCourse(documentId);
    },[])
  return (
    <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={{ uri: "https://lmsbe.hanafirahman.com" + data?.featured_image?.formats?.medium?.url }} width={'auto'} height={300} />
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="left" size={30} color="white"  style={styles.backBtn} />
            </TouchableOpacity>
        </View>
        <View style={styles.dataContainer}>
            <Text style={styles.title}>{data?.title}</Text>
            <View style={{ flexDirection: 'row', marginTop: 20,alignItems:'center',justifyContent:'flex-start', gap: 7 }}>
                  <Entypo name="book" size={24} color="black" />
                  <Text>{data?.Chapter?.length } Chapters</Text>
            </View>
            <View style={styles.descContainer}>
                <Text style={{ fontWeight:'bold', fontSize:18,marginBottom:20 }}>Description</Text>
                <Text numberOfLines={10}>{data?.desc}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => goToLesson(data)}>
                      <Text style={styles.btnText}>Learn</Text>
              </TouchableOpacity>
              <View>
                  <Text style={{ fontWeight:'bold', fontSize:18,marginBottom:20,marginTop: 20 }}>Chapters</Text>
                <LessonSection chapters={data?.Chapter}/>
            </View>
        </View>
    </ScrollView>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        // flex: 2,
        // backgroundColor: 'green'
    },
    dataContainer: {
        // flex: 5,
        paddingHorizontal: 20,
        paddingTop:10,
        backgroundColor: 'white'
    },
    backBtn: {
        marginLeft: 30,
        position: 'absolute',
        bottom: 220,
        // backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descContainer: {
        // paddingHorizontal: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20
    },
     btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      // width: 30,
      textAlign: 'center',
      borderRadius: 10,
      marginTop: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  btnText: {
      color: Colors.white,
      paddingHorizontal: 20
  },
});