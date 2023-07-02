import React, { useContext, useRef, useState } from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { Slide, items } from '../data/SlideShow-data'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation'
import { StackScreenProps } from '@react-navigation/stack'
import { ThemeContext } from '../context/themeContext/themeContext'


const {height: screenHeight, width:screenWidth}=Dimensions.get("window");

interface Props extends StackScreenProps<any, any>{

};

export const SlideScreen = ({navigation}:Props) => {
    const {theme} = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);//se creo el use state para capturar el indice del carousel y setearlo
    const {opacity, fadeIn, fadeOut} = useAnimation();
    const isVisible =  useRef(false);//poner por defeto no visible el boton
    const renderItem=(item:Slide)=>{
        return(
            <View
                style={{ 
                    flex:1,
                    backgroundColor:theme.colors.background,
                    borderRadius:5,
                    padding:40,
                    justifyContent:'center'
                 }}
            >
                <Image source={item.img} style={{ 
                    width:350,
                    height:300,
                    resizeMode:'center'
                 }}/>
                 
                 <Text style={{...styles.title, color:theme.colors.primary}}>{item.title}</Text>
                 <Text style={{ ...styles.subTitle, color:theme.colors.text }}>{item.desc}</Text>

            </View>
        )
    }
  return (
    <SafeAreaView
        style={{ 
            flex:1,
            paddingTop:50
         }}
    >
        <Carousel
             data={items}
             renderItem={({item}:any)=> renderItem(item)  }
             sliderWidth={screenWidth}
             itemWidth={screenWidth}
             layout="default"
             onSnapToItem={(index)=>{//se usa esta propiedad para setear el movimiento del elemento del carousek
                setActiveIndex(index);//setea el nuevo incide al useState
                if((index+1)=== items.length){
                    isVisible.current=true;
                    fadeIn();
                }else{
                    isVisible.current=false;
                    fadeOut();
                }
             }}
         />

         <View
            style={{ 
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:20,
                alignItems:'center'
            }}
         >
            {/* SECCION DE PAGINACION DE CAROUSEL */}
            <Pagination 
                dotsLength={items.length}
                activeDotIndex={ activeIndex }//se creo un useState para tener el indice de paginacion, piezas desde 0
                dotStyle={{ //estilos para el circulo de la paginacion
                    width:10,
                    height:10,
                    borderRadius:5,
                    backgroundColor:theme.colors.primary 
                }}
            />
            <Animated.View
                style={{ 
                    opacity:opacity
                 }}
            >
                <TouchableOpacity
                    style={{ 
                        flexDirection:'row',
                        backgroundColor:theme.colors.primary ,
                        width:140,
                        height:50,
                        borderRadius:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    activeOpacity={ 0.8 }//opacidad del boton
                    onPress={()=>{
                        console.log("Click")
                        if(isVisible.current){
                            navigation.navigate("HomeScreen");//navega a otra pagina
                        }
                    }}
                >
                    <Text
                        style={{ 
                            fontSize:25, 
                            color:'white'

                        }}
                    >
                        Entrar
                    </Text>
                    <Icon
                        name="chevron-forward-outline"
                        color="white"
                        size={30}
                    />
                    
                </TouchableOpacity>
            </Animated.View>
            
         </View>
        

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#5856D6'
    },
    subTitle:{
        fontSize:16
    }
});
