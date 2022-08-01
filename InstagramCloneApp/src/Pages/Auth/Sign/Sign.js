import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import { showMessage } from "react-native-flash-message";

import style from './Sign.style';

import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import Input from '../../../Component/Textİnput';
import TextButton from '../../../Component/TextButton';
import Button from '../../../Component/Button';

const initialFormValues = {
  usermail: "",
  password: "",
  repassword: "",
};

function Sign({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handlelogin = () => {
    return (
      navigation.goBack()
    );
  }

  const handleFormSubmit = async (formValues) => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "Şifreler uyuşmuyor",
        type: "danger",
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password);
      showMessage({
        message: "Kayıt başarılı",
        type: "success",
      });
      navigation.navigate('LoginPage');
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
              <Input
                placeholder="Şifre Tekrar"
                onChangeText={handleChange('repassword')}
                value={values.repassword}
              />

              <View style={style.giriş}>
                <Button text="Kayıt ol" onPress={handleSubmit} />
              </View>
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