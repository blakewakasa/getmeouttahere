import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Regform from './assets/components/regform'

export default class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        <Regform/>
      </View>
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      fontSize: 50,
  }
});
*/
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft:  60,
        paddingRight: 60,

    },
});
/*
const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#B8B8B8',
    },
    activeTitle:{
        color:'red',
    },

});*/
