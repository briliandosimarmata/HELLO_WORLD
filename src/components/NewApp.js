import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Input from '../../Input'

export class NewApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Ini Project Pertama",
      messageButton: "Tekan Di Sini",
      counter: 0
    }
    
  }

  press = () => {
    let button
    if (this.state.counter > 0) {
      button = <Text style={styles.btnText}>{this.state.messageButton} {this.state.counter} Kali</Text>
    } else {
      button = <Text style={styles.btnText}>{this.state.messageButton}</Text>
    }
    return button
  }


  render() {
    return (
      <View>
        <Input textInput="Hallo" />
        <TextInput style={styles.input} value={this.state.message} onChangeText={(text)=>this.setState({message: text})}></TextInput>
        <TouchableOpacity style={styles.btnText} onPress={()=>this.setState({messageButton:"Telah Ditekan", counter: this.state.counter+1})}>
         {this.press()}
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewApp

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    backgroundColor: "grey",
    padding: 10
  },
  input: {
    fontSize: 14,
    textAlign: "center",
    borderWidth: 2,
    color: "black",
    borderColor: "black",
    margin: 20
  }
})
