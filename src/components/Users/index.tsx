import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
    name: string,
    email: string,
    cpf: string,
    onRemove: ()=> void
}

export function Users({ name, email, cpf, onRemove }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>CPF: {cpf}</Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={onRemove}
            >
                <Text style={styles.textDelete}>
                    Delete
                </Text>
            </TouchableOpacity>
        </View>
    )
}

