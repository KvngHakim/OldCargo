import { StyleSheet, TextInput, Text, View,  } from 'react-native';
import { Button } from 'react-native-paper';

export function Signin() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Don't have an account?</Text>
                <Button color='white' style={styles.btn} mode='text'>Sign Up</Button>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignContent: 'center'
    },
    email:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    passWord:{
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    signinText:{
        
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signinBar:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn:{
        
    }
})
