import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput, FlatList, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { getCategories, getCourses, getCoursesByCategory, getCoursesBySearch } from '../../utils/apiservices';
import { useFocusEffect, useRouter } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { GET_COURSES } from '../../utils/apiConfig';
import axios from 'axios';
import services from '../../utils/services';
import Categories from '@/components/Categories';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import CourseCard from '../../components/CourseCard';
import { Colors } from '@/constants/Colors';

const Course = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [appData,setAppData] = useState();
    const [categories,setCategories] = useState();
    const [category,setCategory] = useState();
    const [search, setSearch] = useState('');
    
    const fetchCourse = async () => {
        // setLoading(true);
        const courses = await getCourses();
        setAppData(courses?.data?.data);
        // console.log(courses?.data?.data);
        // setLoading(false);

        return courses?.data?.data;
    }

    const filterCourseByCategory = async (value) => {
        setCategory(value);
        // console.log(value);
        if(value !== 'All'){
            const courses = await getCoursesByCategory(value);
            setAppData(courses?.data?.data);
    
            return courses?.data?.data;
        }else{
            const courses = await getCourses();
            setAppData(courses?.data?.data);

            return courses?.data?.data;
        }
    }

    const filterCourseBySearch = async () => {
        // console.log(search)
        const courses = await getCoursesBySearch(search);
        setAppData(courses?.data?.data);
        return courses?.data?.data;
    }


    useFocusEffect(
        useCallback(() => {
          // console.log('Hello, I am focused!');
          const handleFetchCourses = async () => {
            
            const courses = await getCourses();
            setAppData(courses?.data?.data);
            
            // console.log("clientApp:",clientApp?.data?.appointments);
            // console.log(courses?.data?.data)
            
            return courses?.data?.data;
          }

          const handleFetchCategories = async () => {
            const categories = await getCategories();
            // console.log(categories?.data?.data);
            const all = {category_name: "All"};
            const allCategories = categories?.data?.data;
            allCategories.unshift(all);
            setCategories(allCategories);
            return allCategories;
          }
    
          setLoading(true);
          handleFetchCourses();
          handleFetchCategories();
        //   console.log(categories);
          setLoading(false);
        }, [])
      )


  return (
    <View style={styles.container}>
        <Spinner visible={loading} />
        <View style={styles.searchContainer}>
            <View style={styles.search}>
                <MaterialIcons name="search" size={24} color="black" />
                <TextInput placeholder='Search' onChangeText={setSearch} value={search}/>
            </View>
            <View style={styles.searchBtn}>
                <TouchableOpacity onPress={filterCourseBySearch}>
                    <Text style={styles.searchTxt}>Search</Text>
                </TouchableOpacity>
            </View>

        </View>
        <View>
            <Categories catItem={categories} onCategoryPress={filterCourseByCategory} selectedCategory={category} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 110 }}>
            <CourseCard appData={appData} />  

        </ScrollView>
        {/* <View style={{  gap:5 }}>
            {appData?.length > 0 && (
                appData?.map((item,index) => (
                    <TouchableOpacity style={styles.cardContainer} key={index}>
                        <View>
                            <Image source={{ uri: "https://lmsbe.hanafirahman.com"+item?.featured_image?.formats?.thumbnail?.url }} width={100} height={100} />

                        </View>
                        <View>
                            <Text style={styles.title}>{item?.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            )}
        </View> */}
        
      {/* <Text onPress={fetchCourse} style={{ marginTop:50 }}>Course</Text>
      <TouchableOpacity onPress={fetchCourse}>
        <Text>asdasdasd</Text>
      </TouchableOpacity> */}
    </View>
  )
}



export default Course

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 20
    },
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
    search: {
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '80%'
        // marginBottom: 20
    },
    catContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    searchContainer: {
        marginBottom: 10,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2
    },
    searchBtn: {
        backgroundColor: Colors.primary,
        width: '20%',
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 5
        // alignItems: 'center'
    },
    searchTxt: {
        textAlign: 'center',
        color: Colors.white

    }
});