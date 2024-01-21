import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Loading = ({visible, onClose}) => {
  return (
    <Modal animationType='slide' transparent visible={visible} onRequestClose={()=>onClose()}>
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <ActivityIndicator size={"large"} color={"blue"}/>
            <TouchableOpacity onPress={()=>onClose()} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
        </View>
        </View>
    </Modal>
  )
}

export default Loading

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalContent:{
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        alignItems:'center',
        
    },
    closeButton:{
        marginTop:10,
        backgroundColor:'blue',
        padding:10,
        borderRadius:5
    },
    closeButtonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
})