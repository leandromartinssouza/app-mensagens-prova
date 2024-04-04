import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { Botao } from "../componentes/botao"
import { Balao } from "../componentes/balao"
import { useState } from "react"
import { Entypo } from '@expo/vector-icons';

type Mensagem = {
    nome: string,
    mensagem: string,
    hora: string,
    tipo: 'professor' | 'aluno'
}

type Filtro = 'todos'| 'alunos' | 'professores'

const Chat = ({navigation}) => {

    const [selecao, setSelecao] = useState<Filtro>('todos')

    const [mensagem, setMensagem] = useState<string>('')

    const mensagens: Mensagem[] = [
        {
            nome: 'Eu',
            hora: '11:59',
            mensagem: 'Bom dia turma',
            tipo: 'aluno'
        },
        {
            nome: 'Professor',
            hora: '12:00',
            mensagem: 'Boa tarde',
            tipo: 'professor'
        },
        {
            nome: 'Eu',
            hora: '12:00',
            mensagem: 'Lorem ipsum dolor sit amet isso é uma mensagem de texto longa',
            tipo: 'aluno'
        },
        {
            nome: 'Aluno 1',
            hora: '12:01',
            mensagem: 'Almoço, feijoada e macarrão',
            tipo: 'aluno'
        },
    ]

    const [mensagensFiltradas, setMensagensFiltradas] = useState<Mensagem[]>(mensagens)

    function filtrarMensagens (filtro: Filtro): Mensagem[] {
        if (filtro == 'alunos') return mensagensFiltradas.filter(i => i.tipo == 'aluno')
        if (filtro == 'professores') return mensagensFiltradas.filter(i => i.tipo == 'professor')
        if (filtro == 'todos') return mensagensFiltradas
    }

    function enviarMensagem () {
        console.log('mensagem: ' + mensagem)

        if (mensagem == '') return

        const data = new Date()

        setMensagensFiltradas([
            ...mensagensFiltradas,
            {
                nome: 'Eu',
                mensagem: mensagem,
                hora: `${data.getHours()}:${data.getMinutes()}`,
                tipo: 'aluno'
            }
        ])

        setMensagem('')
    }

    return (
        <View style={style.tela}>
            <View style={style.filtros}>
                <Botao texto="Todos" onPress={()=>setSelecao('todos')} cor={selecao=='todos'?'verde':'branco'}/>
                <Botao texto="Alunos" onPress={()=>setSelecao('alunos')} cor={selecao=='alunos'?'verde':'branco'}/>
                <Botao texto="Professores" onPress={()=>setSelecao('professores')} cor={selecao=='professores'?'verde':'branco'}/>
            </View>
            
            <FlatList data={filtrarMensagens(selecao)} renderItem={t => <Balao nome={t.item.nome} hora={t.item.hora} mensagem={t.item.mensagem} tipo={t.item.tipo} styles={{marginBottom: 12}} />} style={style.lista} />

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, padding:10}}>
                <TextInput value={mensagem} onChangeText={text => setMensagem(text)} style={style.input} placeholder="Insira sua mensagem" multiline/>
                <Pressable style={{padding: 10, backgroundColor: 'green', borderRadius: 10}} onPress={enviarMensagem}>
                    <Entypo name="paper-plane" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    tela: {
        flex: 1
    },
    
    filtros: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    lista: {
        flex: 1,
        padding: 15
    },

    input: {
        padding: 20,
        borderColor: '#0bb713',
        borderWidth: 1,
        flex: 1,
        borderRadius: 15,
        fontSize: 18,
        backgroundColor: 'white'
    }
})

export default Chat