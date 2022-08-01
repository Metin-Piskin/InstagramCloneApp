import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";

import style from './Login.style';

import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Input from '../../../Component/Textİnput';
import TextButton from '../../../Component/TextButton';
import Button from '../../../Component/Button';

const initialFormValues = {
  usermail: '',
  password: '',
};


function Login({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handlesign = () => {
    navigation.navigate('Sign');
  }

  const handleFormSubmit = async (formValues) => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: "danger",
      });
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.logoyazi_container}>
        <Image source={require('../../../Assets/instagramyazı.png')} style={style.logoyazi} />
      </View>

      <View style={style.imputs}>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <>
              <Input
                placeholder="E-posta"
                onChangeText={handleChange('usermail')}
                value={values.usermail}
              />
              <Input
                placeholder="Şifre"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <View style={style.şifre}>
                <TextButton text="Şifreni mi Unuttun?" onPress={null} />
              </View>
              <Button text="Giriş Yap" onPress={handleSubmit} />
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