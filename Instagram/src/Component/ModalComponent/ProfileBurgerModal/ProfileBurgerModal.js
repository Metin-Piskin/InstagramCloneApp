import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { ModalSettings, ModalShape, ModalActivity, ModalQR, ModalSavePost, ModalCloseFriends, ModalCovid, ModalStar } from '../../İcons/icons';
import styles from './ProfileBurgerModal.style';

const PlusModal = ({ onClose, visible, exit }) => {
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="left"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.gg}></View>
                <TouchableOpacity style={styles.inner_container}>
                    <ModalSettings fill="#000" size={20} />
                    <Text style={styles.yazı}>Ayarlar</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container}>
                    <ModalShape fill="#000" size={20} />
                    <Text style={styles.yazı}>Hareketlerin</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container}>
                    <ModalActivity fill="#000" size={20} />
                    <Text style={styles.yazı}>Arşiv</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>


                <TouchableOpacity style={styles.inner_container}>
                    <ModalQR fill="#000" size={20} />
                    <Text style={styles.yazı}>QR Kodu</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container}>
                    <ModalSavePost fill="#000" size={20} />
                    <Text style={styles.yazı}>Kaydedildi</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container}>
                    <ModalCloseFriends fill="#000" size={20} />
                    <Text style={styles.yazı}>Yakın Arkadaşlar</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container}>
                    <ModalStar fill="#000" size={20} />
                    <Text style={styles.yazı}>Favoriler</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.inner_container} onPress={exit}>
                    <ModalCovid fill="#000" size={20} />
                    <Text style={styles.yazı}>COVID-19 Bilgi Merkezi</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

            </View>
        </Modal>
    );
}
export default PlusModal;