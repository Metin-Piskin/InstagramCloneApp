import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


import styles from './uploadfoto.style';
import { Paylas } from '../../Component/İcons/icons';
import Pİnput from '../../Component/PaylaşComponent/Paylaşİnput';
import PButton from '../../Component/PaylaşComponent/PaylaşİmageButton';
import GrayButton from '../../Component/GrayButton';
import MusicGrayButton from '../../Component/MusicGrayButton';

const UploadFoto = () => {
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
    <View style={styles.container}>
      <View style={styles.onecontainer}>
        <View style={styles.image}>
          <PButton
            İmagePress={openGallery}
          />
          <View style={styles.imagecontainer}>
            {
              imageGallery != null &&
              <Image
                source={{ uri: imageGallery.uri }}
                style={styles.oneimage}
              />
            }
          </View>
        </View>
        <View style={styles.açıklama}>
          <Pİnput />
        </View>
      </View>

      <View style={styles.çizgi}></View>
      <TouchableOpacity style={styles.cat}>
        <Text style={styles.yazı}>Kişileri Etiketle</Text>
        <Paylas fill={"#000"} size={24} />
      </TouchableOpacity>

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




    </View>
  );
}
export default UploadFoto;