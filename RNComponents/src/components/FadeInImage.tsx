import React, { useContext, useState } from 'react'
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/themeContext';

interface Props{
    uri:string;
    style?:StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri,style={}}:Props) => {
  const {theme} = useContext(ThemeContext);
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] =  useState(true);
  const finishLoading=()=>{
    setIsLoading(false);
    fadeIn();
  }
  return (
    <View
        style={{ 
            justifyContent:'center',
            alignItems:'center'
         }}
    >
        {
            isLoading && 
            <ActivityIndicator 
                style={{ position:'absolute' }} 
                color={theme.colors.primary}
                size={30}
            />
        }
        <Animated.Image 
            source={{ uri }}
            style={{ 
                ...style as any,
                opacity
            }}
            onLoadEnd={()=>{ finishLoading() }}
        />
    </View>
  )
}
