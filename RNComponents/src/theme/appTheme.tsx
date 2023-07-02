import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
      marginHorizontal:20
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 10,
      marginVertical: 3,
      marginHorizontal: 4,
    },
    title: {
      fontSize: 20,
    },
    //SECCION DE ESTILOS EN EL MODAL
    modalBasePosition:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.3)',
      justifyContent:'center',
      alignItems:'center'//posiciona el modal en el centro de la vista
    },
    modalBasicBody:{
      backgroundColor:'white',
      width:200,
      height:200,
      justifyContent:'center',
      alignItems:'center',//posiciona los elementos dentro del modal en el centro
      shadowOffset:{
          width:0,
          height:10
      },//crea un efecto de sombra en el modal
      shadowOpacity:0.25,//opacidad en la sobra del modak,
      elevation:10,//hace efecto de elevacion del modal
      borderRadius:5,
    }
});
