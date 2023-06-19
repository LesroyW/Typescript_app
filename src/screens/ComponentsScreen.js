import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Lesroy';

    return ( <View>
        <Text style={styles.textStyle}>Getting Started With React Native!</Text>
        <Text style={styles.subHeaderTextStyle}>My Name is {name}</Text>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderTextStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;