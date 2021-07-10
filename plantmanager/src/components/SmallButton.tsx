import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native";
import colors from "../styles/colors";
import { Feather } from '@expo/vector-icons';

interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    hasIcon?: boolean;
}

export function SmallButton({ title='ok', hasIcon=true, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                {...rest}
            >
            <Text style={styles.buttonText}>
                { 
                    !hasIcon ? title : 
                    <Feather 
                        name='chevron-right'
                        style={styles.buttonIcon}
                    />
                }
            </Text>

            

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32,
    },
});