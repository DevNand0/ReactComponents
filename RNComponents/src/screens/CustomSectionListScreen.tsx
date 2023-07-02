import React, { useContext } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { casas } from '../data/SectionListData';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/themeContext';

export const CustomSectionListScreen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex:1}}>
      {/*<HeaderTitle title="Section List"/>*/}
      <SectionList 
        ListHeaderComponent={()=><HeaderTitle title="Custom SectionList"/>}//SE COLOCA UN TITULO EN LA CABECERA DEL LISTADO, valor opcional
        ListFooterComponent={()=><HeaderTitle title={"Total casas "+casas.length}/>}//SE COLOCA COMO PIE DE LISTADO, valor opcional
        sections={casas}//la lista de objetos (datos en json)
        keyExtractor={(item,index)=>item+index}//identificador unico, como un ID
        renderItem= {({item}) => (
                      <View style={{...stylesList.item, backgroundColor:theme.colors.background}}>
                        <Text style={{...styles.title, color:theme.colors.text}}>{item}</Text>
                      </View>
                    )}
        renderSectionHeader={({section: {title}}) => (
                              <View style={{ backgroundColor:theme.colors.background }}>
                                  <HeaderTitle title={title}/>
                              </View>
                            )}
        renderSectionFooter={({section})=>(//SE COLOCA PARA VER EL TOTAL DE ELEMENTOS EN EL SUB LISTADO, valor opcional
          <HeaderTitle title={"Total "+section.data.length}/>
        )}
        stickySectionHeadersEnabled={true}//mantiene la cabecera mientras deslizas, hasta mostrar la nueva cabecera,  valor opcional
        SectionSeparatorComponent={()=><ItemSeparator/>}//crea un separador, divide los elementos de la sub lista del elemento nuevo de la lista, valor opcional
        ItemSeparatorComponent={()=><ItemSeparator/>}//crea la separacion para cada elemento de la lista y sublista, valor opcional
        showsVerticalScrollIndicator={false}//quita la visualizacion del scroll en la lista
      />
    </View>
  )
}

const stylesList = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
  },  
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
});
