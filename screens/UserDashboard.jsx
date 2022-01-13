import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Form from './Form';
import { Appbar } from 'react-native-paper';
import MapView from 'react-native-maps';


const Tab = createMaterialBottomTabNavigator();

function Home (){
    return (
      <View>
      <Appbar.Header>
        <Appbar.Content title="Khana Sab Ke Lye" />
      <Appbar.Action
        icon="logout-variant"
        onPress={() => console.log('Pressed archive')}
       />
     </Appbar.Header>
     <View style={styles.container}>
     <MapView style={styles.map} />
   </View>
   </View>
    )
}


const UserDashboard = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="black"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: 'white' }}
        >
        <Tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
         />

        <Tab.Screen name="Form" component={Form}
        options={{
            tabBarLabel: 'Form',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="form-select" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}

export default UserDashboard

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
