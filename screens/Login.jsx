import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const Login = ({navigation}) => {
    return (
        <View style={styles.Main}>
            <Image style={styles.Logo} source={require('../assets/LogoKhanaSabkliye-01.png')}/>
            <Text style={styles.Welcome}>WELCOME BACK</Text>
            
            <TextInput
                style={styles.Input}
                label='Email'
             />
            
            <TextInput
                label='Password'
                style={styles.Input}
                secureTextEntry={true}
             />

             <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('UserDashboard')}}>
                 <Text style={styles.ButtonText}>Log In</Text>
             </TouchableOpacity>
            <View style={styles.SignUpOpt}>
             <Text style={styles.SignUpText}>Don't have an account? </Text>
             <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}><Text style={styles.SignUp}>Sign Up</Text></TouchableOpacity>
             </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        justifyContent: 'center',
    },
    Logo: {
        width: '30%',
        height: '20%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    Welcome: {
        textAlign: 'center',
        fontSize: 30,
        // fontFamily: 'Cochin'
    },
    Input: {
        width: "90%",
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    Button: {
        marginTop: 10,
        backgroundColor: '#4CBB17',
        height: 50,
        width: "70%",
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    SignUpOpt: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    SignUp: {
        color: 'green'
    }

})


