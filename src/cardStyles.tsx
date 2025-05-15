// import FontStyles from '@assets/stylesheets/FontStyles';
// import Colors from '@constants/Colors';
// import Dimension from '@constants/Dimension';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 18 },
    headerText: {
        marginBottom: 16,
        paddingHorizontal: 16,
    },

    imageStyle: {
        resizeMode: 'cover',
    },
    blurContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        overflow: 'hidden',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    arrowButton: {
        width: 24,
        height: 24,
    },
    typeText: {
        // ...FontStyles.poppinsSB16White,
    },

    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        alignContent: 'center',
        alignItems: 'center',
    },
    saveButton: { position: 'absolute', top: 40, right: 10 },

    bgImage: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    cardStyle: {
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        height: 312,
        width: '100%',
    },
});

export default styles;

