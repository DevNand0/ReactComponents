import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ItemData } from '../interface/AppInterfaces';
import { DATA } from '../data/MenuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {
    
    const itemSeparator = ()=>{
        return (
            <View style = {{ 
                borderBottomWidth:2,
                opacity:0.4
             }}/>
        )
    }
    return (
        <View style={{ flex:1, ...styles.globalMargin }}>
            <Text>
                <Icon name="star-outline" size={30} color='gray' />
                Stack Navigator, HomeScreen FlatList
            </Text>
            <FlatList
                data={DATA}
                renderItem={({item})=><FlatListMenuItem item={item}/>}
                keyExtractor={(item)=>item.name.toString()}
                ListHeaderComponent ={()=><HeaderTitle title="Opciones de Menu"/>}
                ItemSeparatorComponent={()=><ItemSeparator />}
            />
        </View>
    )
}


