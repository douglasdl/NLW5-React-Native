import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Avatar } from "./Avatar";

export function Header() {
    const [username, setUsername] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || '');
        }

        loadStorageUserName();
    },[]);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>
                    {username}
                </Text>
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