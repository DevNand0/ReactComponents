import React, { useContext, useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/themeContext';

export const SwitchScreen = () => {
  const {theme} = useContext(ThemeContext);
  
  const [state, setState] = useState({
    isActive: false,
    isHungry:true,
    isHappy:false
  });

  const {isActive, isHungry, isHappy} = state;//obtiene todos los valores del state ya seteado

  const onChange = (value: Boolean, field: string)=>{
    setState({
      ...state,
      [field]:value
    });
  }
  return (
    <View style={{ marginHorizontal:20 }}>
        <HeaderTitle title="Custom Switch"/>
        
        <View style={styles.switchRow}>
          <Text style={{...styles.switchText, color:theme.colors.text}}>
            isActive
          </Text>
          <CustomSwitch isOn={isActive} onChange={(value) =>onChange(value,'isActive')}/>
          
        </View>

        <View style={styles.switchRow}>
          <Text style={{...styles.switchText, color:theme.colors.text}}>
            isHungry
          </Text>
          <CustomSwitch isOn={isHungry}  onChange={(value) =>onChange(value,'isHungry')}/>
          
        </View>

        <View style={styles.switchRow}>
          <Text style={{...styles.switchText, color:theme.colors.text}}>
            isHappy
          </Text>
          <CustomSwitch isOn={isHappy}  onChange={(value) =>onChange(value,'isHappy')}/>
          
        </View>
        
        <Text style={{...styles.switchText, color:theme.colors.text}}>
          {JSON.stringify(state, null, 5)}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    switchRow:{//ELEMENTO DEL SWITCH CENTRADO Y EN UNA FILA
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:10
    },
    switchText:{
      fontSize:25,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
