import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const ResultDetails = ({ imageName, item }) => {
        return <View style={styles.containerStyle}>
                <Image
                        style={styles.imageStyle}
                        source={{ uri: imageName }}>
                </Image>
                <Text>{item.first_name}</Text>
                <Text style={{color:'blue'}}>{item.email}</Text></View>
}

const styles = StyleSheet.create({
        containerStyle: {
                marginLeft: 10,
                marginBottom:5
        },
        imageStyle: {
                width: 250,
                height: 100,
                marginBottom:5,
                borderRadius:5
        }
});

export default ResultDetails;