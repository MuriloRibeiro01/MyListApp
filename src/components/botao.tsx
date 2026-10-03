import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Botao () {

    return (
        <TouchableOpacity style={styles.icone}><Image source={require('../../public/images/Layer 2.png')}/></TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    icone: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 52,
        width: 52,
        backgroundColor: '#007cb5',
    }
})