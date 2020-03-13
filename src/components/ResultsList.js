import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetails from '../components/ResultsDetails';
const ResultList = ({title,results,navigation})=>{
    if(!results.length)
    {
        return null;
    }
    return(
            <View style = {styles.container}>
                <Text style = {styles.titleStyle}>{title}</Text>
                <FlatList
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    data ={results}
                    keyExtractor ={(result)=>result.id}
                    renderItem={({item})=>{
                        return(
                        <TouchableOpacity onPress ={()=>navigation.navigate('ResultsShow',{id :item.id})}>
                        <ResultsDetails result={item}/>
                        </TouchableOpacity>
                        )
                    }}   
                />
            </View>
        )
};
const styles =StyleSheet.create({
    titleStyle :
    {
        fontSize : 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom : 5
    },
    container :{
        marginBottom : 10,
    }
});
export default withNavigation(ResultList);