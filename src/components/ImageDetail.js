import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ imageScore, title, imageSource }) => {
    return <View>
        <Image source={imageSource} />
        <Text>Title - {title}</Text>
        <Text>Image Score - {imageScore}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;