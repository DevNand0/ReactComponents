import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/themeContext';

export const InfiniteScrollScreen = () => {
  const {theme} = useContext(ThemeContext);
  const [numbers,setNumbers] =useState([0,1,2,3,4,5]);
  const loaadMore=()=>{
    const newArray:number[]=[];//inicializa un arreglo de numeros vacio
    for(let i=0;i<5;i++){
        newArray[i]= numbers.length+i;
    }
    setTimeout(()=>{
        setNumbers([...numbers, ...newArray]);//transforma seteando del viejo arreglo, el nuevo generaado
    },1500);
    
  }
  const renderItem = (item:number)=>{
    return(
        <FadeInImage 
            uri={`https://picsum.photos/id/${item}/500/400`} 
            style={{ width:'100%', height:400 }}
        />//animacion de fadein y opacidad
        /*
        <Image 
            source={{ uri:`https://picsum.photos/id/${item}/500/400` }}
            style={{ 
                width:'100%',
                height:400
             }}
        />
        */
    );
  }
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
        {/*<HeaderTitle title="Infinite Scroll"/>*/}
        <FlatList 
            data={numbers}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>renderItem(item)}
            ListHeaderComponent={<HeaderTitle title="Infinity Scroll"/>}
            //las acciones de onEndReached, onEndReachedThreshold van juentas siempre
            onEndReached={()=>{
                loaadMore();
            }}//cuando va bajando al tope del scroll, ejecuta esta accion
            onEndReachedThreshold={0.5}//este valor es fijo

            ListFooterComponent={()=>(//pie del listado
                <View
                    style={{ 
                        height:150,
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center'
                }}>
                    <ActivityIndicator size={30} color={ theme.colors.primary }/>
                </View>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150
    }
});
