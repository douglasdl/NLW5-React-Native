import { Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';
import { Entypo } from '@expo/vector-icons'

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image 
                source={wateringImg} 
                style={styles.image} 
                resizeMode='contain'
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Text>
                <Entypo name='chevron-thin-right'/>
            </Text>
            <Button title='>' />
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
});