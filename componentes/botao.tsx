import { Pressable, PressableProps, StyleSheet, Text, ViewProps } from "react-native"

interface BotaoProps extends PressableProps {
    texto: string,
    cor ?: 'verde' | 'vermelho' | 'branco' | 'azul'
    cheio ?: boolean 
}

const Botao = ({texto, cor, cheio, ...props}: BotaoProps) => {

    function defineCor(cor: 'verde' | 'vermelho' | 'branco' | 'azul'){
        if (cor == 'azul') return style.azul
        if (cor == 'verde') return style.verde
        if (cor == 'vermelho') return style.vermelho
        
        return style.branco
    }

    function defineCorTexto(cor: 'verde' | 'vermelho' | 'branco' | 'azul'){
        if (cor == 'azul') return style.azulTexto
        if (cor == 'verde') return style.verdeTexto
        if (cor == 'vermelho') return style.vermelhoTexto
        
        return style.brancoTexto
    }

    return (
        <Pressable {...props} style={[style.botao, defineCor(cor), cheio?style.cheio:style.auto]}>
            <Text style={[style.botaoTexto, defineCorTexto(cor)]}>{texto}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    botao: {
        padding: 18,
        alignItems: 'center',
        borderRadius: 15
    },
    
    botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    verde: {
        backgroundColor: '#219653'
    },

    vermelho: {

    },

    branco: {
        backgroundColor: 'white',
    },

    azul: {

    },

    verdeTexto: {
        color: 'white'
    },

    vermelhoTexto: {

    },

    brancoTexto: {
        color: 'black'
    },

    azulTexto: {

    },

    cheio: {
        width: '100%'
    },
    auto: {
        width: 'auto'
    }

})

export {Botao}