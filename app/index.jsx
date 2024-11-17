import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import onboarding from '@/assets/images/onboarding.png'
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors'

const Page = () => {
    const router = useRouter();
  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={onboarding} width={300} height={300} alt='image' />
      </View>
      <View style={styles.textContainer}>
        
        <Text style={styles.title}>Join UniBridge Group to Kick Start Your Lesson</Text>
        <View style={styles.btnContainer}>

          <TouchableOpacity style={styles.signIn} onPress={() => router.push("/signin")}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUp} onPress={() => router.push("/signup")}>
            <Text style={styles.btnText2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
    //   backgroundColor: 'red',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20
    },
    imageContainer: {
      flex: 1,
    //   backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingTop: 100
    },
    image: {
      marginTop: 50
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    signIn: {
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
    signUp: {
      // backgroundColor: Colors.white,
      padding: 15,
      textAlign: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.primary,
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
    btnText2: {
      color: Colors.black,
      paddingHorizontal: 20
    },
    btnContainer: {
      flexDirection: 'row',
      gap: 5,
      marginTop: 30
    }
  });