import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {

const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('');


const searchApi = async () => {
    console.log('calling search api');
    try {
        const response = await yelp.get('/users');
        // console.log('response search api',response);
        setResults(response.data.data)
    } catch(e){
        // console.log('error search api',e);

        setErrorMessage('error occured');
    }
    
}

useEffect( () => {
    searchApi()
}, [])

    return [searchApi, results, errorMessage];
}
