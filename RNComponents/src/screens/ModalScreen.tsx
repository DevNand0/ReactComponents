import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    //setear que el modal visible=false
    const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
        <HeaderTitle title="Modal Screen"/>
        <Button 
            title="Abrir Modal" 
            onPress={ ()=>{
                setIsVisible(true);
            } }/>
        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}//hace un efecto transparente
        >
            <View style={styles.modalBasePosition}>
                <View
                    style={styles.modalBasicBody}
                >
                {/*<HeaderTitle title="Modal"/>*/}
                    <Text style={{ fontSize:20, fontWeight:'bold', marginBottom:20 }}>Modal</Text>
                    <Text style={{ fontSize:16, fontWeight:'300', marginBottom:20 }}>Cuerpo del Modal</Text>
                    <Button 
                        title="cerrar"
                        onPress={ ()=>{
                            setIsVisible(false);
                        } }
                    />
                </View>
            </View>

        </Modal>
    </View>
  )
}
