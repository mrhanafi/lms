import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import axios from 'axios';
import { LOGIN_USER } from '@/utils/apiConfig';
import services from '../utils/services';

const SignIn = () => {
  const router = useRouter();
    const [identifier, setIdentifier] = useState('user1');
    const [password, setPassword] = useState('123456');
    const onSubmit = async () => {
        // console.log(identifier)
        let res = await axios.post(LOGIN_USER, {
            identifier,
            password
        }).then((response) => {
            // console.log("User profile", response.data.user);
            // console.log("User token", response.data.jwt);
            // console.log(response.data.jwt);
            services.storeData("token",response.data.jwt);
            services.storeData("user",JSON.stringify(response.data.user));

            
            router.push({
              pathname:'/(tabs)',
              params:response.data
            });
        })
        .catch((error) => {
            console.log("An error occurred:", error.response);
        });
    }

    const onTest = async () => {
      const huhu = await services.getData("user");
            console.log(huhu);
    }
  return (
    <View style={styles.container}>
        <View>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{ flex:1 }}>
            <Text style={{ fontSize: 40, textAlign: 'center',fontWeight: 'bold' }}>Sign In</Text>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>Please Sign in with your account</Text>
              
            <View style={{ paddingTop: 50 }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput placeholder='Your Username Here' style={styles.txtbox } value={identifier} onChangeText={(val) => setIdentifier(val)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder='**************' secureTextEntry={true} style={styles.txtbox } value={password} onChangeText={(val) => setPassword(val)} />
                </View>
                <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.btn} onPress={onTest}>
                    <Text style={styles.btnText}>Test</Text>
                </TouchableOpacity> */}
            </View>
        </View>
        <View style={styles.note}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                Didn't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text style={styles.signup}>Sign Up Here</Text>
            </TouchableOpacity>
            
        </View>
        
    </View>
  )
}

export default SignIn

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