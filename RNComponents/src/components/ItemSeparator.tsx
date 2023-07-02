import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/themeContext';

export const ItemSeparator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{ 
        borderBottomWidth:1,
        opacity:0.4,
        marginVertical:8,
        borderBottomColor:theme.dividerColor
     }}/>
  )
}
