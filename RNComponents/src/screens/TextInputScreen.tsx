import React, { useContext, useState } from 'react'
import  { 
            StyleSheet, TextInput, View, 
            KeyboardAvoidingView, Platform, Keyboard, 
            TouchableWithoutFeedback, 
            Text
        } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import {useForm} from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/themeContext'

export const TextInputScreen = () => {

    const {form, onChange, isSubscribed} = useForm({
        name:'',
        email:'',
        phone:'',
        isSubscribed:false
    });
    const {setDarkTheme, setLightTheme,theme} = useContext(ThemeContext);
    //const {name,email,phone} = form;
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS==="ios"?"padding":"height"}
    >
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.globalMargin}>
                    <HeaderTitle title="input screen"/>
                    <TextInput
                        style={{ 
                            ...styleScreen.inputStyle,//deserealizar el estilo para modificar todo el estilo del input
                            borderColor:theme.colors.text,
                            color:theme.colors.text
                        }}
                        placeholderTextColor={theme.dividerColor}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) =>onChange(value,'name')}
                        keyboardAppearance='dark'
                    />

                    <TextInput
                        keyboardType='email-address'
                        style={{ 
                            ...styleScreen.inputStyle,//deserealizar el estilo para modificar todo el estilo del input
                            borderColor:theme.colors.text,
                            color:theme.colors.text
                        }}
                        placeholderTextColor={theme.dividerColor}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) =>onChange(value,'email')}
                        keyboardAppearance='dark'
                    />

                    <TextInput
                        keyboardType='phone-pad'
                        style={{ 
                            ...styleScreen.inputStyle,//deserealizar el estilo para modificar todo el estilo del input
                            borderColor:theme.colors.text,
                            color:theme.colors.text
                        }}
                        placeholderTextColor={theme.dividerColor}
                        placeholder="Ingrese su telefono"
                        onChangeText={(value) =>onChange(value,'phone')}
                        keyboardAppearance='dark'
                    />

                    <View style={styleScreen.switchRow}>
                        <Text>
                            Subscrito  
                        </Text>
                        <CustomSwitch isOn={isSubscribed} onChange={(value) =>onChange(value,'isSubscribed')}/>
                    </View>
                    

                    <HeaderTitle title={JSON.stringify(form,null,5)}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}



const styleScreen = StyleSheet.create({
    inputStyle:{//simple text bordered
        borderWidth:1,
        //borderColor:'rgba(0,0,0,0.3)',
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10 
    },
    switchRow:{//ELEMENTO DEL SWITCH CENTRADO Y EN UNA FILA
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
    },
});
