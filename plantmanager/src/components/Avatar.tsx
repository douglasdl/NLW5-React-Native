import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
    urlImage: string;
}

export function Avatar( {urlImage}: Props) {

    return (
        <View
            style={styles.container}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,      
    },
});