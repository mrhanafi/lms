import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const SignUp = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
          <View>
              <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="left" size={30} color="black" />
              </TouchableOpacity>
          </View>
          <View style={{ flex:1 }}>
                <Text style={{ fontSize: 40, textAlign: 'center',fontWeight: 'bold' }}>Sign Up</Text>
                <Text style={{ fontSize: 20,textAlign: 'center',marginTop: 20 }}>Create an account to begin your Learning Journey</Text>
                <View style={{ paddingTop: 50 }}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput placeholder='Your Name Here' style={styles.txtbox } />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder='Your Email Here' style={styles.txtbox } />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput placeholder='**************' secureTextEntry={true} style={styles.txtbox } />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput placeholder='**************' secureTextEntry={true} style={styles.txtbox } />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
            </View>
          </View>
          <View style={styles.note}>
                <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => router.push('/signin')}>
                    <Text style={styles.signup}>Sign In Here</Text>
                </TouchableOpacity>
                
            </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor: 'red',
      paddingHorizontal: 30,
      paddingTop: 60,
  },
  inputContainer: {
      paddingBottom: 20
  },
  label: {
      marginBottom: 10,
      fontSize: 18
  },
  txtbox: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Colors.lightGrey,
      paddingHorizontal: 15
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
  note: { flexDirection: 'row', justifyContent: 'center', gap: 7, paddingBottom: 50 },
  signup: {
      color: Colors.primary,
      textDecorationLine: 'underline'
  }
});