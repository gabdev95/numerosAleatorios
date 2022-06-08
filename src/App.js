import React, {useState} from 'react';
import {Text, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero(){
        const novo_numero = Math.floor(Math.random() * 100)

        setNumero(novo_numero)
    }

    return (
        <SafeAreaView  style = {style.container}>
            <StatusBar backgroundColor={'pink'} barStyle='dark-content'/>
            <Text style = {style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style = {style.botao}>
                <Text style = {style.txtbotao}>Gerar Número</Text>
            </TouchableOpacity>
            <Text style = {style.txtlab}>Por Gabriele de Medeiros</Text>
        </SafeAreaView>
    );
};

const style = StyleSheet.create ({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#4F565E',
    },
    botao: {
        backgroundColor: '#4F565E',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
    },
    txtbotao: {
        color: 'pink',
        fontSize: 24,
    },
    txtlab: {
        color: '#4F565E',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default App;
