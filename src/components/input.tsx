import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

type InputProps = {
    placeholder: string;
}

export default function Input(props: InputProps) {
    return (
        <TextInput style={styles.inputBase} placeholder={props.placeholder} placeholderTextColor={'#7a7a7a'}></TextInput>
    )
}

const styles = StyleSheet.create({
    inputBase: {
        backgroundColor: '#262626',
        borderRadius: 5,
        width: 290,
        height: 52,
        fontSize: 18,
        borderWidth: 1,
    }
})