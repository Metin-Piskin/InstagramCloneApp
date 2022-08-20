import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import validUrl from 'valid-url';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import styles from './uploadfoto.style';
import { Paylas } from '../../Component/İcons/icons';
import Pİnput from '../../Component/PaylaşComponent/Paylaşİnput';
import PButton from '../../Component/PaylaşComponent/PaylaşİmageButton';
import GrayButton from '../../Component/GrayButton';
import MusicGrayButton from '../../Component/MusicGrayButton';
import YazıButton from "../../Component/YazıButton/YazıButton";

const PLACEHOLDER_IMAGE = 'https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=170667a&w=0&h=_cx7HW9R4Uc_OLLxg2PcRXno4KERpYLi5vCz-NEyhi0=';

const uploadPostSchema = Yup.object().shape({
  imageurl: Yup.string().url().required('A url is required'),
  caption: Yup.string().max(2200, 'Caption has Reached the character limit.')
});

const UploadFoto = ({ navigation }) => {
  const [thumbnailurl, setThumbnailurl] = useState(PLACEHOLDER_IMAGE);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    const user = auth().currentUser
    const unsubscribe = firestore()
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot(
        snapshot => snapshot.docs.map(doc => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture
          }
          )
        })
      )
      return unsubscribe
  }

  useEffect(() => {
    getUsername()
  }, [])

  const uploadPostToFirebase = (imageurl, caption) => {
    const unsubscribe = firestore().collection('users')
    .doc(auth().currentUser.email)
    .collection('posts')
    .add({
      imageurl: imageurl,
      user: currentLoggedInUser.username,
      profile_picture: currentLoggedInUser.profilePicture,
      owner_uid: auth().currentUser.uid,
      owner_email: auth().currentUser.email,
      caption: caption,
      createdAt: firestore.FieldValue.serverTimestamp(),
      likes_by_users: [],
      comments: [],
    })
    .then(() => { navigation.goBack() })
    return unsubscribe
  }

  const [imageGallery, setImageGallery] = useState(null);
  const openGallery = () => {
    const option = {
      mediaType: 'photo',
      qualiy: 1,
    }

    launchImageLibrary(option, (res) => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (res.errorCode) {
        console.log(res.errorMessage);
      }
      else {
        const data = res.assets[0]
        setImageGallery(data)
      }
    })
  }

  return (
    <Formik
      initialValues={{ caption: '', imageurl: '' }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageurl, values.caption)
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <View style={styles.container}>
          <View style={styles.onecontainer}>
            <View style={styles.image}>
              <Image
                source={{ uri: validUrl.isUri(thumbnailurl) ? thumbnailurl : PLACEHOLDER_IMAGE }}
                style={styles.oneimage}
              />
            </View>

            <View style={styles.açıklama}>
              <Pİnput
                title="Açıklama Ekle..."
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                onChange={null}
                multiline={true}
              />
            </View>
            <View style={styles.çizgi}></View>
            <View style={styles.twocontainer}>
              <Pİnput
                onChange={(e) => setThumbnailurl(e.nativeEvent.text)}
                title="URL Ekle..."
                onChangeText={handleChange('imageurl')}
                onBlur={handleBlur('imageurl')}
                value={values.imageurl}
                multiline={false}
              />
              {errors.imageurl && (
                <Text style={{ fontSize: 10, color: 'red' }}>
                  {errors.imageurl}
                </Text>
              )}
            </View>

          </View>

      <View style={styles.çizgi}></View>
      <TouchableOpacity style={styles.cat} onPress={handleSubmit}>
        <Text style={styles.yazı}>Kişileri Etiketle</Text>
        <Paylas fill={"#000"} size={24} />
      </TouchableOpacity>
          <Clone />

          <YazıButton
            text="Paylaş"
            onPress={handleSubmit}
            disabled={!isValid}
          />

        </View>
      )}
    </Formik>
  );
}
export default UploadFoto;


const Clone = () => {
  return (
    <>

      <View style={styles.çizgi}></View>
      <TouchableOpacity style={styles.cat}>
        <Text style={styles.yazı}>Konum Ekle</Text>
        <Paylas fill={"#000"} size={24} />
      </TouchableOpacity>
      <View style={styles.konum}>
        <GrayButton
          title="Bursa"
          onPress={null}
        />
        <GrayButton
          title="İzmir"
          onPress={null}
        />
        <GrayButton
          title="İstanbul"
          onPress={null}
        />
        <GrayButton
          title="Ankara"
          onPress={null}
        />
        <GrayButton
          title="Eskişehir"
          onPress={null}
        />
      </View>

      <View style={styles.çizgi}></View>
      <TouchableOpacity style={styles.cat}>
        <Text style={styles.yazı}>Müzik Ekle</Text>
        <Paylas fill={"#000"} size={24} />
      </TouchableOpacity>
      <View style={styles.konum}>
        <MusicGrayButton
          title="Motörhead - God Was Never On Your Side"
          onPress={null}
        />
        <MusicGrayButton
          title="Motörhead - God Was Never On Your Side"
          onPress={null}
        />
      </View>

      <View style={styles.çizgi}></View>
      <View style={styles.cat}>
        <Text style={styles.yazı}>Facebook</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#2ecc71" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          value={false}
        />
      </View>

      <View style={styles.cat}>
        <Text style={styles.yazı}>Twitter</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#2ecc71" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          value={true}
        />
      </View>

      <View style={styles.cat}>
        <Text style={styles.yazı}>Tumblr</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#2ecc71" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          value={false}
        />
      </View>


      <View style={styles.çizgi}></View>
      <TouchableOpacity style={styles.cat}>
        <Text style={styles.yazı}>Gelişmiş Ayarlar</Text>
        <Paylas fill={"#000"} size={24} />
      </TouchableOpacity>
      <View style={styles.çizgi}></View>
    </>
  )
}