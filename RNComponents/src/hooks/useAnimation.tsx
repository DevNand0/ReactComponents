import { useRef } from "react";
import { Animated, Easing } from "react-native";
export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;//INICIA OPACO
    const position = useRef(new Animated.Value(0)).current;//INICIAR DESDE ARRIBA
    const fadeIn = () => {
        Animated.timing(
            opacity,{
                toValue:1,
                duration:300,
                useNativeDriver: true
            }
        ).start();
        //EFECTO DE BAJAR
        Animated.timing(
            position,{
                toValue:0,
                duration:1000,
                useNativeDriver:true,
                easing: Easing.bounce//EFECTO REBOTAR
            }
        ).start();
    }
    const fadeOut = () => {
        Animated.timing(
            opacity,{
                toValue:0,
                duration:300,
                useNativeDriver: true
            }
        ).start();
        //EFECTO DE SUBIR
        Animated.timing(
            position,{
                toValue:-100,
                duration:1000,
                useNativeDriver:true
            }
        ).start();
    }
    const startMovingPosition = (initPosition: number , duration: number = 300)=>{
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                toValue:0,
                duration,
                useNativeDriver:true
            }
        )
    }
    return{
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
