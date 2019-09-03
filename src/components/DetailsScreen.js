import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import yelp from '../api/yelp';

const DetailPage = ( {navigation} ) => {

    const id = navigation.getParam('id');
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        const details = await yelp.get(`users/${id}`);
        setUser(details.data.data);
        console.log(details.data.data,' details',user);

    }

    useEffect( () => {
        fetchDetails()
    }, []);

    if(!user){
        return null;
    }
    return <View style={{alignItems :'center'}}>
        <Text>DetailPage</Text>
        <Text>name: {user.first_name}</Text>
        <Text>family: {user.last_name}</Text>
        <Text>email: {user.email}</Text>
        <Image 
        style={{ width: 300, height: 300, alignSelf: 'center'}}
        source={ {uri: user.avatar}}></Image>
    </View>
}

const styles = StyleSheet.create({

})

export default DetailPage;