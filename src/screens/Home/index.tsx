import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Users } from "../../components/Users";

export function Home() {

    const users = [
        {
        id: 1,
        name: "Hyan",
        email: "ddasjfna@gmail.com",
        cpf: "12312312345",
        },
        {
        id: 2,
        name: "Wesley",
        email: "lsidgnsldgba@gmail.com",
        cpf: "47583737456",
        },
        {
        id: 3,
        name: "Lucas",
        email: "bpauebfkajs@gmail.com",
        cpf: "09203917234",
        },
        {
        id: 4,
        name: "Hugo",
        email: "tyspdnsl@gmail.com",
        cpf: "56381936456",
        },
        {
        id: 5,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 45,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 455,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 4554,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 45215,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 4155,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 4585,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
        {
        id: 45547,
        name: "Gabriel",
        email: "gsfhdfh@gmail.com",
        cpf: "93613426498",
        },
    ];

    // function addUsers(){
    //     push(users)
    // }

    function registerUser(){
        console.log('Você registrou um novo usuário')
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
            />
            <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor='#fff'
            />
            <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            placeholderTextColor='#fff'
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
                
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>{
                <Text style={styles.listEmptyText}>
                    Você não tem possui nenhum usuário cadastrado. Faça um novo cadastro!
                </Text>
            }}
            />
        
        </View>
    </View>
    )
}
