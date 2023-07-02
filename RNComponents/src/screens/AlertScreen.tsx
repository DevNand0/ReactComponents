import React from 'react'
import { Button, View, Alert } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {
    const showAlert = () =>{
        Alert.alert('Titulo', 'Mensaje de un Alert Basico con dos botones', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],{
            cancelable:false,
            onDismiss: ()=>{
                console.log("onDismiss")
            }
          }
        );
    }
    const showAlertMultiOption = ()=>{
        Alert.alert('Titulo del Alert', 'Algun mensaje', [
            {
              text: 'Opcion 1',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],{
            cancelable:false,
            onDismiss: ()=>{
                console.log("onDismiss")
            }
          }
        );
    }

    const showPrompt = ()=>{
      prompt(
        'Enter Password',
        'Enter your password to claim your 1.58 in lottery winnings',
        [
          {text:'cancel',onPress:()=> console.log('cancel pressed'),style:'cancel'},
          {text:'ok',onPress:password=> console.log('ok pressed, passworrd: '+password)},
        ],
        {
          type:'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder:'placeholder'
        }
      );
    }
    return (
        <View style= {styles.globalMargin}>
            <HeaderTitle title="Alerts"/>
            <Button 
                title="Mostrar Alerta" 
                onPress={showAlert}
            />
            <View style={{height:10}}/>
            <Button 
                title="Mostrar Alerta Multi Boton" 
                onPress={showAlertMultiOption}
            />
            <View style={{height:10}}/>
            <Button 
                title="Mostrar prompt " 
                onPress={showPrompt}
            />
            
        </View>
    )
}
