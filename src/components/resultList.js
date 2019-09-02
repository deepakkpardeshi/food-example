import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ResultDetails from '../components/ResultDetails'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ResultList = ( { name, results, navigation  }) => {
    return <View>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={{marginLeft:10}}>results: {results.length}</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <TouchableWithoutFeedback onPress={() => { navigation.push('Details') }}>
                    <View>
                        <ResultDetails
                            imageName={item.avatar}
                            item={item} />
                    </View>
                </TouchableWithoutFeedback>
            }}
        >
        </FlatList>
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10
    },
    
});


export default ResultList;