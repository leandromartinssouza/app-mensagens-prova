import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native"

interface BalaoProps extends ViewProps {
    nome: string,
    mensagem: string,
    hora: string,
    tipo: 'professor' | 'aluno',
    styles?: StyleProp<ViewStyle>
}

const Balao = ({nome, mensagem, hora, tipo, styles, ...props}: BalaoProps) => {
    return (
        <View {...props} style={[style.geral, tipo == 'aluno'?style.aluno:style.professor, styles]}>
            <View style={[style.balao, tipo == 'professor'?style.balaoProfessor:style.balaoAluno]}>
                <Text style={[style.nome, tipo == 'professor'?style.professor:style.aluno]}>{nome}</Text>
                <Text>{mensagem}</Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={tipo == 'professor'?style.professor:style.aluno}>{hora}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    geral: {
        flex: 1,
    },
    balao: {
        backgroundColor: 'lightgray',
        maxWidth: '80%',
        padding: 20
    },
    nome: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    mensagem: {

    },
    hora: {

    },
    professor: {
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    aluno:{
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    balaoAluno: {
        borderRadius: 20,
        borderTopRightRadius: 0
    },
    balaoProfessor: {
        borderRadius: 20,
        borderTopLeftRadius: 0
    }
})

export {Balao}