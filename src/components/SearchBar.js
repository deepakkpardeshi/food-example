import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ( { term, setTerm, onTermSubmit}) => {
    return <View style={styles.ViewStyle}>
        <Image style={styles.imageStyle} source={require('../icons/search_ic.png')}></Image>
        <TextInput 
        style={styles.textStyle} 
        placeholder='search'
        onChangeText={newTerm => setTerm(newTerm)}
        onEndEditing={() => onTermSubmit()}
        ></TextInput>
        </View>
}

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#F0EEEE',
        height: 44,
        margin: 10,
        flexDirection: 'row',
    },
    imageStyle: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        marginHorizontal:10
    },
    textStyle: {
        flex:1,
    }
});

export default SearchBar;