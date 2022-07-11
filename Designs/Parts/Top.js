import { StyleSheet,  Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';


export function Top({navigation}) {
    return (
        <View style={styles.header}>
            <View style={styles.brandL}>
                
                <Text style={styles.brandText}>OldCargo</Text>
            </View>
            <TouchableOpacity>
                <Button mode='text' color='black' style={styles.btn} 
                onPress= {() => navigation.navigate('Signin')}
                >Sign In</Button>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    brandText:{
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: 5,
        color: 'deep blue'
    },
    brandL:{
        flexDirection: 'row',
    },
    btn:{
        paddingTop: 10,
        overlayColor: 'blue'
    }
})






