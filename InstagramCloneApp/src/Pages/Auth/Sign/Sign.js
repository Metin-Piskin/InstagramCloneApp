import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import Validator from 'email-validator';

import style from './Sign.style';

import authErrorMessageParser from "../../../utils/authErrorMessageParser";

import TextButton from '../../../Component/TextButton';

const initialFormValues = {
  usermail: "",
  username: "",
  password: "",
};

function Sign({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handlelogin = () => {
    return (
      navigation.goBack()
    );
  }

  const handleFormSubmit = async (formValues) => {
    {/*
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });
      return;
    }
    */}
    try {
      await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password, formValues.username);
      showMessage({
        message: "Kayıt başarılı",
        type: "success",
      });
      navigation.navigate('Login');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false);
    }
  }

  const LoginFormSchema = Yup.object().shape({
    usermail: Yup.string().email().required('Email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
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
                  onBlur={handleBlur('usermail')}
                />
              </View>

              <View style={[
                styles.input_container,
                {
                  borderColor:
                    1 > values.username || values.username.length > 5
                      ? '#E0DDDD'
                      : '#FF0000',
                }
              ]}>
                <TextInput
                  style={styles.input}
                  placeholder="Kullanıcı Adı"
                  onChangeText={handleChange('username')}
                  value={values.username}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onBlur={handleBlur('username')}
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

              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <View style={styles.mcontainer(isValid)}>
                  <Text style={styles.text}>Kayıt ol</Text>
                </View>
              </TouchableOpacity>

            </>
          )}
        </Formik>
      </View>

      <View style={style.kayıtol}>
        <Text>Bir Hesaba Sahip misin? </Text>
        <TextButton text="Giriş Yap" onPress={handlelogin} />
      </View>

    </View>
  );
}
export default Sign;

const styles = StyleSheet.create({
  mcontainer: isValid => ({
    backgroundColor: isValid ? "#1877F2" : "#9ACAF7",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 40,
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