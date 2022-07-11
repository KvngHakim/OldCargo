import { View, StyleSheet, Image, ImageBackground, Text, } from 'react-native';
import { Button } from 'react-native-paper';


export function Intro({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imBg} resizeMode='cover' source={require('../Images/photos/GarageSale.jpg')}>
                <View style={styles.sect}>
                    <Text style={styles.mainText}>OLD CARGO:</Text>
                    <Text style={styles.supText}>It's better than it sounds!!!</Text>
                </View>

                <Button mode='contained' color='skyblue' style={styles.btn}
                onPress={() => navigation.navigate('Home')}
                >Start Trading</Button>
                
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    btn:{
        paddingVertical:18,
        marginHorizontal: 20,
        marginBottom: 20
    },
    sect:{
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    mainText:{
        fontSize: 70,
        color: 'blue',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    supText:{
        fontSize: 20,
        color: 'white'
    }
  

})