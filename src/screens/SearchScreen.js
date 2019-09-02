import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/resultList'

const SearchScreen = (props) => {
    console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return <View >
        <SearchBar
            term={term}
            setTerm={setTerm}
            onTermSubmit={() => searchApi()} />
        {errorMessage ? <Text>${errorMessage}</Text> : null}
        <ScrollView>
            <ResultList
                navigation={props.navigation}
                results={results}
                name='cheap' />
            <ResultList
                navigation={props.navigation}
                results={results} name='budget' />
            <ResultList
                navigation={props.navigation}
                results={results} name='luxury' />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
});

export default SearchScreen;