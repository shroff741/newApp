import React,{useState,useEffect} from 'react';
import {Text,Image,View,StyleSheet,FlatList,ScrollView} from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen =({navigation})=>{
    const [result,setResult]=useState(null);
    const id = navigation.getParam('id');
    //console.log(result);
    const getResult =async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result)
    {
        return null;
    }
    return(
        <>
            <Text style = {styles.textStyle}>{result.name}</Text>
            <Text style ={styles.textStyle}>Contact : {result.display_phone}</Text>
            <Text style = {styles.textStyle}>Address : {result.location.display_address}</Text>
            <Text style = {styles.textStyle}>Galary</Text>
            <FlatList
                data ={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return<Image style = {styles.imageStyle} source={{uri:item}}/>
                }}
            />
        </>
    )
};
const styles= StyleSheet.create({
    imageStyle:
    {
        height : 200,
        width: 300,
        marginBottom :10,
        marginLeft :5
    },
    textStyle:
    {
        fontSize : 15,
        fontWeight :'bold',
        marginBottom : 5,
        marginLeft :5
    }
});
export default ResultsShowScreen;