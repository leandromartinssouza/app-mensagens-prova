import { Alert, Image, StyleSheet, Text, View } from "react-native"
import { Input } from "../componentes/input"
import { Botao } from "../componentes/botao"
import { useState } from "react"

const Login = ({navigation}) => {

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    function fazerLogin(){
        console.log(email)
        console.log(senha)

        const regex = /@(.*\.)?ifpr/;

        if (!regex.test(email)){
            Alert.alert("Digite o email corretamente")
        }
        else {
            if (email == '' || senha == ''){
                Alert.alert("Não deixe campos em branco")
            }
            else {
                navigation.navigate('chat')
            }
        }

    }

    return (
        <View style={style.bloco}>
            <View style={style.viewCentro}>
                <Image source={require('../assets/messages-logo.png')} style={style.imagem}/>
            </View>
            <View style={style.viewCentro}>
                <View style={[style.gap, style.full, style.margemBaixo]}>
                    <Text style={style.titulo}>Faça Login</Text>
                    <Text style={style.subtitulo}>Entre com seu e-mail e senha para acessar o chat</Text>
                </View>
                <View style={[style.gap, style.full]}>
                    <Input placeholder="E-mail" onChangeText={txt => setEmail(txt)} value={email}/>
                    <Input placeholder="Senha" secureTextEntry onChangeText={txt => setSenha(txt)} value={senha}/>
                </View>
            </View>
            <View style={[style.viewCentro, style.gap]}>
                <Botao texto="Login" onPress={fazerLogin} cheio/>
                <Botao texto="Registrar-se" cor="verde" onPress={()=>navigation.navigate('registro')} cheio/>
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

    imagem: {
        width: 190,
        height: 190,
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

    subtitulo: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },

    margemBaixo: {
        marginBottom: 20
    }
})

export default Login