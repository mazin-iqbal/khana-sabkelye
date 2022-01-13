import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';



const Form = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Monthly', value: 'monthly'},
      {label: 'Daily 1 time', value: 'daily1'},
      {label: 'Daily 2 times', value: 'daily2'},
      {label: 'Daily 3 times', value: 'daily3'},
    ]);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

    const showDatepicker = () => {
        showMode('date');
      };
   
      const [image, setImage] = useState(null);

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
     
      const [cnicFront, setCnicFront] = useState(null);

      const pickCnicFrontImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
          setCnicFront(result.uri);
        }
      };
     
      const [cnicBack, setCnicBack] = useState(null);

      const pickCnicBackImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
          setCnicBack(result.uri);
        }
      };
     
      const submitForm = () => {
        console.log("k")
      }

    return (
        <View style={styles.Main}>
        <Appbar.Header>
          <Appbar.Content title="Khana Sab Ke Lye" />
        <Appbar.Action
          icon="logout-variant"
          onPress={() => console.log('Pressed archive')}
         />
       </Appbar.Header>
        
        <Text style={styles.Heading}>
            Application Form
        </Text>
        <ScrollView>
       <TextInput
                style={styles.Input}
                label='Name'
        />
       <TextInput
                style={styles.Input}
                label="Father's Name"
        />
       <TextInput
                style={styles.Input}
                label='CNIC Number'
                keyboardType='numeric'
        />

        <TouchableOpacity style= {styles.DateButton} onPress={showDatepicker}>
             <Text style={styles.DateText}>Date of Birth</Text>
         </TouchableOpacity>
         {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}

    <View style={styles.NumberInputs}>
       <TextInput
                style={styles.Input1}
                label='No. of Family members'
                keyboardType='numeric'
        />
        
      <TextInput
                style={styles.Input1}
                label='Monthly Income'
                keyboardType='numeric'
        />
        </View>

         <DropDownPicker
        placeholder="Help Category"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{marginBottom: open ? 150 : 0,height: 60, borderRadius: 0, backgroundColor: 'rgb(230,230,230)', borderColor: 'rgb(230,230,230)', marginTop: 10, width: "90%", alignSelf: 'center',}}
      />
      
      <Button onPress={pickImage} style={styles.ProfilePic}>Upload Your Picture</Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <Button onPress={pickCnicFrontImage} style={styles.CnicButton}>Upload CNIC Front</Button>
      {cnicFront && <Image source={{ uri: cnicFront }} style={{ width: 200, height: 200 }} />}

      
      <Button onPress={pickCnicBackImage} style={styles.CnicButton}>Upload CNIC Back</Button>
      {cnicBack && <Image source={{ uri: cnicBack }} style={{ width: 200, height: 200 }} />}

      <TouchableOpacity style={styles.Submit} onPress={submitForm}>
        <Text style={styles.SubmitText}>SUBMIT</Text>
      </TouchableOpacity>
      </ScrollView>
     </View>
    )
}

export default Form

const styles = StyleSheet.create({
    Main: {
        backgroundColor: 'white'
    },
    Heading: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 5,
    },
    Input: {
        marginTop: 10,
        width: "90%",
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
    NumberInputs:{
      flexDirection: 'row',
      alignSelf: 'center',
      width: '90%',
      justifyContent: 'space-between'
    },
    Input1: {
        marginTop: 10,
        width: "49%",
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
    DropDown: {
        marginTop: 10,
        width: "90%",
        alignSelf: 'center',
        zIndex: 10,
    },
    DateButton: {
        width: '90%',
        backgroundColor: 'rgb(230, 230, 230)',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        paddingLeft: 12,
        padding: 18,
        zIndex: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    DateText: {
        color: '#696969',
        fontSize: 16,
    },
   
   ProfilePic: {
        width: '90%',
        borderStyle: "solid",
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'green',
        alignSelf: 'center'

   },

   CnicButton:{
      width: "90%",
      marginTop: 10,
      alignSelf: 'center',
      borderStyle: "solid",
      borderColor: 'green',
      borderWidth: 1,
      overflow: 'visible',
    },
    Submit: {
      width: '50%',
      alignSelf: 'center',
      backgroundColor: '#4CBB17',
      marginTop: 20,
      marginBottom: 180,
      padding: 10,
      borderRadius: 10,

    },
    SubmitText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 17,
    }
})
