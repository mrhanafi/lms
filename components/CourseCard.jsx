import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const CourseCard = ({ appData }) => {
    const router = useRouter();
    const goToCourseDetails = (item) => {
        router.push({
            pathname: '/course-details',
            params: {documentId:item.documentId}
        });
        // console.log(value)
    }
  return (
    <View style={{  gap:5 }}>
            {appData?.length > 0 && (
                appData?.map((item,index) => (
                    <TouchableOpacity style={styles.cardContainer} key={index} onPress={() => goToCourseDetails(item)}>
                        <View>
                            <Image source={{ uri: "https://lmsbe.hanafirahman.com"+item?.featured_image?.formats?.thumbnail?.url }} width={100} height={100} />

                        </View>
                        <View>
                            <Text style={styles.title}>{item?.title}</Text>
                            {/* <Text>Description</Text> */}
                        </View>
                    </TouchableOpacity>
                ))
            )}
        </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row'
    },
    title: {
        width: '50%',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 5
    },
})