import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { ModalVector, ModalSwitch, ModalReels, ModalLive, ModalGuides, ModalPlay } from '../../İcons/icons';
import styles from './ProfilePlusModal.style';

const PlusModal = ({ onClose, visible }) => {
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
                <Text style={styles.title}>Oluştur</Text>
                <View style={styles.titleçizgi}></View>

                <TouchableOpacity style={styles.innercontainer}>
                    <ModalReels fill="#000" size={20} />
                    <Text style={styles.yazı}>Reels Videosu</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.innercontainer}>
                    <ModalVector fill="#000" size={20} />
                    <Text style={styles.yazı}>Gönderi</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.innercontainer}>
                    <ModalSwitch fill="#000" size={20} />
                    <Text style={styles.yazı}>Hikaye</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>


                <TouchableOpacity style={styles.innercontainer}>
                    <ModalPlay fill="#000" size={20} />
                    <Text style={styles.yazı}>Öne Çıkan Hikaye</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.innercontainer}>
                    <ModalLive fill="#000" size={20} />
                    <Text style={styles.yazı}>Canlı</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.innercontainer}>
                    <ModalGuides fill="#000" size={20} />
                    <Text style={styles.yazı}>Rehber</Text>
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

            </View>
        </Modal>
    );
}
export default PlusModal;