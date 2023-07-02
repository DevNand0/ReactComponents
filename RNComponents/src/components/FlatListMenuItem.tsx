import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native';
import { ItemData } from '../interface/AppInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/themeContext';

//es el elemento de la etiqueta que se encuenta en el FlatList
type ItemProps={
    item : ItemData,
    onPress:()=> void,
    backgroundColor:string,
    textColor:string
}

const Item = ({item,onPress,backgroundColor,textColor}:ItemProps)=>{
    const navigation = useNavigation();
    const {theme} = useContext(ThemeContext);
    return(
        <TouchableOpacity
            onPress={onPress}
            style={[styles.item, {backgroundColor}]}
        >
                <Text
                    //style={[styles.title, {color:textColor}]}
                    style={[styles.title, { color:theme.colors.text }]}
                >
                    <Icon name={item.icon} size={25} color={theme.colors.primary} />
                    {item.name}
                    
                    <Icon name="chevron-forward-outline" size={20} color={theme.colors.primary} />
                </Text>
    
        </TouchableOpacity>
    )
};

/* es el elemento que se encuentra en la lista, indica desde tamano y color */
export const FlatListMenuItem = ({item}: {item:ItemData}) => {
    const navigation = useNavigation();
    const [selectedName,setSelectedName] = useState<string>();
    //const backgroundColor = item.name===selectedName?'#287707' : '#8FE869';
    //const color = item.name === selectedName ? 'white' : 'black';
    const color = 'black';
    const backgroundColor = 'white';
        return (
            /* es el item en la lista */
            <Item
              item={item}
              onPress={() => {
                        setSelectedName(item.name);
                        navigation.navigate(item.component);// SI COMPILA IGUAL CRV
                      }}
              //backgroundColor={backgroundColor}
              textColor={color}
            />
        );
}
