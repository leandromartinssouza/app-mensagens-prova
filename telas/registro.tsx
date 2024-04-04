import { Alert, StyleSheet, Text, View } from "react-native"
import { Botao } from "../componentes/botao"
import { Input } from "../componentes/input"
import { useState } from "react"

const Registro = ({navigation}) => {

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [confirmarSenha, setConfirmarSenha] = useState<string>('')

    function fazerRegistro() {

        const regex = /@(.*\.)?ifpr/;

        if (!regex.test(email)){
            Alert.alert("Digite o email corretamente")
        }
        else {
            if (email == '' || senha == '' || confirmarSenha == ''){
                Alert.alert("Não deixe campos em branco")
            }
            else {
                if (senha != confirmarSenha){
                    Alert.alert("Senhas diferentes!")
                }
                else {
                    // mostra console
                    console.log({email, senha, confirmarSenha})

                    // salva

                    // limpa campos
                    setEmail('')
                    setSenha('')
                    setConfirmarSenha('')

                    //volta
                    navigation.goBack()
                }
            }
        }
    }

    return (
        <View style={style.bloco}>
            <View style={style.viewCentro}>
                <View style={[style.gap, style.full, style.margemBaixo]}>
                    <Text style={style.titulo}>Faça seu Registro</Text>
                </View>
                <View style={[style.gap, style.full]}>
                    <Input placeholder="E-mail" onChangeText={txt => setEmail(txt)} value={email}/>
                    <Input placeholder="Senha" secureTextEntry onChangeText={txt => setSenha(txt)} value={senha}/>
                    <Input placeholder="Confime a senha" secureTextEntry onChangeText={txt => setConfirmarSenha(txt)} value={confirmarSenha}/>
                </View>
            </View>
            <View style={[style.viewCentro, style.gap]}>
                <Botao texto="Registrar-se" onPress={fazerRegistro} cheio/>
                <Botao texto="Voltar" cor="verde" onPress={()=>navigation.goBack()} cheio/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bloco: {
        flex: 1,
        padding: 20,
        backgroundColor: '#03630f'
    },

    viewCentro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    full: {
        width: '100%',
    },

    gap: {
        gap: 10
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

    margemBaixo: {
        marginBottom: 50
    }
})


export default Registro