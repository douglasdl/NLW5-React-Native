import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Avatar } from "./Avatar";

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>Douglas</Text>
            </View>

            <Avatar urlImage="https://github.com/douglasdl.png"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    username: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,

    },
})