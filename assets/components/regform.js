import React from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Keyboard,
} from 'react-native';

const serverURL = 'myhomeurl';

export default class Regform extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
            seconds:0,
            minutes:0,
            isLoading:true,
            dataSource: null,
        }
    }





  handleChangeText = (input) => {
      this.setState({text: input});
      if (validPhone(this.state.text)){
          Keyboard.dismiss();
      }

  }
  handleChangeSeconds = (input) =>{
      this.setState({seconds:input});
  }
  handleChangeMinutes = (input) =>{
      this.setState({minutes:input});
  }

  onPressEvent = () =>{
      if (validPhone(this.state.text))
        {
            {/*this.setState({text:"1"+parseInt(this.state.text,10)})*/};
            alert(this.state.seconds);
            var start = Date.now();
            var finish = start + sectomil(parseInt(this.state.seconds,10)) + mintomil(parseInt(this.state.minutes),10);
            do{
                start = Date.now();

            }
            while(start<=finish)
            alert('RE');
            sendCallRequest(this.state.text);
        }
    else{
        alert('Invalid phone number');
    }
  }
  render() {
    return (
     <View style={styles.regform}>
        <Text style = {styles.header}>GET ME OUTTA HERE</Text>

        <TextInput style = {styles.textinput} placeholder = "Leave" />

        <TextInput style = {styles.textinput} placeholder = "Seconds" keyboardType = 'numeric' value = {this.state.seconds} onChangeText = {this.handleChangeSeconds} />

        <TextInput style = {styles.textinput} placeholder = "Minutes" keyboardType ='numeric' value = {this.state.minutes} onChangeText = {this.handleChangeMinutes}/>

        <TextInput style = {styles.textinput} placeholder = "Your phone number" keyboardType = 'numeric' onChangeText ={this.handleChangeText} value = {this.state.text}/>

        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.btntext} onPress = {this.onPressEvent}> Call</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
function sendCallRequest(number){
    fetch(serverURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mynumber: number,
        }),
    });

}
{/*function sendCallRequest() {
  return fetch('http://192.168.1.5:5005/call')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.success;
    })
    .catch((error) => {
      console.error(error);
    });
}*/}

function componentDidMount(){
    alert(
    fetch(serverURL)
        .then((response) => response.json())
        .then((responseJson) => {

            this.setState({
                isLoading:false,
                dataSource: responseJson.message,
            });
        })
        .catch((error) => {
            console.log(error)
        }));
    alert('no good');
}

function validPhone(phone){
    return (phone.length==10 &&!isNaN(phone))

}

function sectomil(seconds){
	return seconds* 1000
}

function mintomil(minutes){
	return minutes *60000
}
const styles = StyleSheet.create({
    regform:{
        alignSelf: 'stretch',

    },
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom:10,
        marginBottom: 40,
        borderBottomColor: '#fff',



    },
    textinput:{
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',


    },

    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#36b3de',

    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',

    }
});
