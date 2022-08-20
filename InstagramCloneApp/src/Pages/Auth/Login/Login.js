import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import Validator from 'email-validator';

import style from './Login.style';

import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Input from '../../../Component/Textİnput';
import TextButton from '../../../Component/TextButton';


const initialFormValues = {
  usermail: '',
  password: '',
};


function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handlesign = () => {
    navigation.push('Sign');
  }

  const handleFormSubmit = async (formValues) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'My Lord...',
        error.message + '\n\n ... what would you like to do next?',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'cancel',
          },
          {
            text: 'Kayıt Ol',
            onPress: () => navigation.navigate('Sign'),
          },
        ]
      );
      {/*
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      */}
      setLoading(false);
    }
  }

  const LoginFormSchema = Yup.object().shape({
    usermail: Yup.string().email().required('Email is required'),
    password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
  });

  return (
    <View style={style.container}>
      <View style={style.logoyazi_container}>
        <Image source={require('../../../Assets/instagramyazı.png')} style={style.logoyazi} />
      </View>

      <View style={style.imputs}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleFormSubmit}
          validationSchema={LoginFormSchema}
          validateOnMount={true}
        >
          {({ values, handleChange, handleSubmit, handleBlur, isValid }) => (
            <>
              <View style={[
                styles.input_container,
                {
                  borderColor:
                    values.usermail < 1 || Validator.validate(values.usermail)
                      ? '#E0DDDD'
                      : '#FF0000',
                }
              ]}>
                <TextInput
                  style={styles.input}
                  placeholder="E-posta"
                  onChangeText={handleChange('usermail')}
                  value={values.usermail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onBlur={handleBlur('usermail')}
                />
              </View>

              <View style={[
                styles.input_container,
                {
                  borderColor:
                    1 > values.password || values.password.length > 5
                      ? '#E0DDDD'
                      : '#FF0000',
                }
              ]}>
                <TextInput
                  style={styles.input}
                  placeholder="Şifre"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  autoCapitalize="none"
                  textContentType={'password'}
                  autoCorrect={false}
                  secureTextEntry={true}
                  onBlur={handleBlur('password')}
                />
              </View>

              <View style={style.şifre}>
                <TextButton text="Şifreni mi Unuttun?" onPress={null} />
              </View>


              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <View style={styles.container(isValid)}>
                  <Text style={styles.text}>Giriş Yap</Text>
                </View>
              </TouchableOpacity>

            </>
          )}
        </Formik>
      </View>

      <View style={style.kayıtol}>
        <Text>Hesabınız yok mu? </Text>
        <TextButton text="Kayıt ol" onPress={handlesign} />
      </View>

    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: isValid => ({
    backgroundColor: isValid ? "#1877F2" : "#9ACAF7",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginHorizontal: 10,
    marginVertical: 25,
  }),
  text: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E0DDDD",
    backgroundColor: "#E8E6E6",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#E8E6E6",
    borderRadius: 8,
    color: "black",
    padding: Platform.OS === "android" ? 4 : 8,
  },
});