import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Users } from "../../components/Users";
import { useState } from "react";
import { Alert } from "react-native";

    type Props = {
        id: number,
        name: string,
        email: string,
        cpf: string,
    }

export function Home() {
    const [users, setUsers] = useState<Props[]>([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    function registerUser(){
        const data = {
            id: String(new Date().getTime()),
            name,
            email,
            cpf,
        };
        console.log(data)

        const result = users.filter(user => user.name.toUpperCase() === name.toUpperCase())
        if (result.length > 0) {
            return Alert.alert('Usuário', 'Já existe um usuário com esse nome.')
        }

        setUsers([...users, data])
        setName('')
        setEmail('')
        setCpf('')
    }

    function removerUser(name: string){
        Alert.alert('Usuário', `Remover o usuário ${name}?`,[
            {
                text:'Sim',
                onPress: ()=>setUsers(users => users.filter(user => user.name !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`Você clicou em remover o Participante ${name}`)
    }

    return (
    <View style={styles.container}>
        <Text style={styles.textRegistro}>
            Tela de Registro
        </Text>
        <View>
            <TextInput 
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor='#fff'
            value={name}
            onChangeText={value => setName(value)}
            />
            <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor='#fff'
            value={email}
            onChangeText={value => setEmail(value)}
            />
            <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            placeholderTextColor='#fff'
            value={cpf}
            onChangeText={value => setCpf(value)}
            />

            <TouchableOpacity style={styles.button}
            onPress={registerUser}
            >
                <Text style={styles.buttonText}>
                    Enviar
                </Text>
            </TouchableOpacity>

            
            <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Users 
                name={item.name}
                email={item.email}
                cpf={item.cpf}
                onRemove={()=>removerUser(item.name)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>(
                <Text style={styles.listEmptyText}>
                    Você não tem possui nenhum usuário cadastrado. Faça um novo cadastro!
                </Text>
            )}
            />
        </View>
    </View>
    )
}
