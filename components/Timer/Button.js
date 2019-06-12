import React  from "react";
import {View,TouchableOpacity, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import {FontAwesome} from "@expo/vector-icons";

function Button({iconName, onPress}){
    return(
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color={"white"}></FontAwesome>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
}

export default Button;



