import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export function Menu() {
    return (
        <View style={styles.horDisplays}>
            <TouchableOpacity style={styles.icon}>
                <Image source={require('../Images/icons/coupon.png')} style={styles.icon} size={36} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <Image source={require('../Images/icons/wallet.png')}  style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <Image source={require('../Images/icons/home.png')}  style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <Image source={require('../Images/icons/location.png')}  style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <Image source={require('../Images/icons/user.png')}  style={styles.icon} size={36} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    horDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,

    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: '#b1c4c4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    horDisplays:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginTop: 50,
        position: 'relative',
        bottom: 0
    }
});