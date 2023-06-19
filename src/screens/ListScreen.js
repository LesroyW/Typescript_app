import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: 'Friend #1', age: '20'},
        { name: 'Friend #2', age: '23'},
        { name: 'Friend #3', age: '26'},
        { name: 'Friend #4', age: '28'},
        { name: 'Friend #5', age: '30'},
        { name: 'Friend #6', age: '30'},
    ];

    return (
    <FlatList 
    showsVerticalScrollIndicator={false}
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem = {({ item }) => {
        return <Text style ={styles.textStyles}>{item.name} - Age {item.age}</Text>
    }}
    />
    );
};

const styles = StyleSheet.create({
    textStyles: {
     marginVertical: 50
    }
});

export default ListScreen;