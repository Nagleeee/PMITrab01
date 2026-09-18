import { Text, View } from 'react-native'
import { styles } from './styles'

type Props = {
    name: string,
    email: string,
    cpf: string
}

export function Users({ name, email, cpf }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>CPF: {cpf}</Text>
        </View>
    )
}

