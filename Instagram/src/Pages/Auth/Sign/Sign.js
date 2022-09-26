import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { showMessage } from "react-native-flash-message";
import * as Yup from 'yup';
import Validator from 'email-validator';
import validUrl from 'valid-url';

import style from './Sign.style';

import authErrorMessageParser from "../../../utils/authErrorMessageParser";

import TextButton from '../../../Component/TextButton';
const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=';

const initialFormValues = {
  usermail: "",
  username: "",
  password: "",
};

function Sign({ navigation }) {
  const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMAGE);
  const [loading, setLoading] = useState(false);

  const handlelogin = () => {
    return (
      navigation.goBack()
    );
  }

  {/*
  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }
  */}

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
      const authUser = await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
      firestore().collection('users')
        .doc(formValues.usermail)
        .set({
          owner_uid: authUser.user.uid,
          username: formValues.username,
          email: formValues.usermail,
          profile_picture: formValues.imageurl,
        });
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
    imageurl: Yup.string().url().required('A url is required'),
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
          {({ values, handleChange, handleSubmit, handleBlur, isValid, errors }) => (
            <>
              <View style={style.ppcontainer}>
                <Image
                  source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE }}
                  style={style.ppfoto}
                />
                <View style={style.ppinput_container}>
                  <TextInput
                    style={style.ppinput}
                    placeholder="Profil Resmi URL"
                    onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
                    onChangeText={handleChange('imageurl')}
                    onBlur={handleBlur('imageurl')}
                    value={values.imageurl}
                    multiline={true}
                  />
                  {errors.imageurl && (
                    <Text style={{ fontSize: 10, color: 'red' }}>
                      {errors.imageurl}
                    </Text>
                  )}
                </View>
              </View>
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