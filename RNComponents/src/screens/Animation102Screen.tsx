import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  //FUNCIONALIDAD DE ANIMACION MOVIMIENTO EN XY 
  //(es casi un drag pero vuelve a su posicion inicial)
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder:()=>true,
    onPanResponderMove:Animated.event([
      null,
      {
        dx:pan.x,
        dy:pan.y
      },
    ],{useNativeDriver:false}),
    onPanResponderRelease: ()=>{
      Animated.spring(
        pan,
        {
          toValue: {x:0, y:0}, 
          useNativeDriver:false//para que funcione el moviiento debe ser false 
          //y asi vuelve a su posicion de 0, es decir el centro
        }
      ).start();
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(),styles.box]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    box:{
        backgroundColor:'#75CEDB',
        width:150,
        height:150,
        borderRadius:4
    },
});
