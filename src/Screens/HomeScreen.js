import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { apiCalling } from "../Redux/action/action";

const HomeScreen = () => {
    const state = useSelector(state => state.reducer.data)
    const dispatch = useDispatch()
    

    useEffect (() => {
        dispatch(apiCalling())
        
    }, [])
    console.log(state)
    return (
        <View>
            <FlatList
            data={state}
            renderItem={({item}) => 
            <Text style={{margin:10, padding:20}}>{item.id} {item.title} {item.releaseYear}</Text>
    }
    />
           
            </View>
    )
}
export default HomeScreen