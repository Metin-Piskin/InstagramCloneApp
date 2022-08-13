import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { ModalVector, ModalSwitch, ModalReels, ModalLive } from '../../İcons/icons';
import styles from './PlusModal.style';

const PlusModal = ({ onClose, visible, PaylasPress }) => {
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

                <TouchableOpacity style={styles.paylaş} onPress={PaylasPress}>
                    <Text style={styles.yazı}>Paylaş</Text>
                    <ModalVector fill="#000" size={20} />
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.hikaye} onPress={null}>
                    <Text style={styles.yazı}>Hikaye</Text>
                    <ModalSwitch fill="#000" size={20} />
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.reels} onPress={null}>
                    <Text style={styles.yazı}>Reels Videosu</Text>
                    <ModalReels fill="#000" size={20} />
                </TouchableOpacity>
                <View style={styles.çizgi}></View>

                <TouchableOpacity style={styles.canlı} onPress={null}>
                    <Text style={styles.yazı}>Canlı</Text>
                    <ModalLive fill="#000" size={20} />
                </TouchableOpacity>

            </View>
        </Modal>
    );
}
export default PlusModal;