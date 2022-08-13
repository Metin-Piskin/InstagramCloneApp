import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./PaylaşİmageButton.style";
import { Add } from '../../İcons/icons';

const PaylaşİmageButton = ({ İmagePress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={İmagePress}>
            <Add fill={"#000"} size={60} />
        </TouchableOpacity>
    );
};
export default PaylaşİmageButton;