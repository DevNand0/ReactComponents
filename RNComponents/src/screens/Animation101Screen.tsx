import React, { useContext, useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/themeContext';

export const Animation101Screen = () => {
  const {fadeIn,fadeOut,opacity,position, startMovingPosition} = useAnimation();
  //LLAMA AL HOOK QUE TIENE LA ANIMACION fade y rebote
  const {setDarkTheme, setLightTheme,theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
        <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor:theme.colors.primary,
                opacity:opacity,//llama la coloracion opaca
                marginBottom:20,
                transform:[{
                    translateY:position
                    //se encarga de posicionar en Y
                    //la baja del elemento dentri de esta etiqueta
                }]
            }}/>
            <Button title="fadeIn" 
                onPress={()=>{
                    fadeIn();
                    //startMovingPosition(-100);
                }}
                color={ theme.colors.primary }/>
            <Button title="fadeOut" color={ theme.colors.primary } onPress={fadeOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    purpleBox:{
        
        width:150,
        height:150
    },
});
