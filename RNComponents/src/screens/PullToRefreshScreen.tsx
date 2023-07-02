import React, { useContext, useState } from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/themeContext';

export const PullToRefreshScreen = () => {
  const {setDarkTheme, setLightTheme,theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] =useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () =>{
      setRefreshing(true);
      setData("");
      setTimeout(()=>{
          console.log("terminado");
          setRefreshing(false);
          setData("Datos cargados correctamente")
      }, 2500);
  }
  return (
      <ScrollView
        style={{
          marginTop: refreshing?top:0//es solo para hacerlo en iOS
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={150}
            //propiedades de colores
            progressBackgroundColor={theme.dividerColor}
            tintColor={theme.dark?'white':'black'}
            colors={[theme.colors.text]}
            //colors={['red','blue','green']}
            //para ios
            title="recargando"
            titleColor='red'
          />
        }
      >
        <View style={styles.globalMargin}>
            <HeaderTitle title="Pull To Refresh"/>
        </View>
        {
          data && <Text>{data}</Text>
        }
        
      </ScrollView>
  )
}
