import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { Header } from '../Parts/Header';
import { Top } from '../Parts/Top';
import { Menu } from '../Parts/Menu';


export function Homescreen() {
    return (
        <View>
            <Top />
            <Header />
            <Menu />




        </View>
    )
}