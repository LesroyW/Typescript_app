import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.textStyle1}><Text>Child #1</Text></View>
        <View style={styles.textStyle2}><Text>Child #2</Text></View>
        <View style={styles.textStyle3}><Text>Child #3</Text></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 500
    },
    textStyle1: {
        borderWidth: 3,
        borderColor: 'red',
        height: 110,
        width: 110,
        alignSelf: 'flex-start'
    },
    textStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        height: 110,
        width: 110,
        alignSelf: 'center'
    },
    textStyle3: {
        borderWidth: 3,
        borderColor: 'red',
        height: 110,
        width: 110,
        position: 'absolute',
        alignSelf: 'flex-end'
    }
});

export default BoxScreen;