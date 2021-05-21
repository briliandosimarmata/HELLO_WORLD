import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }
    
    render() {
        return (
            <View>
                <Text>{this.props.count}</Text>
                <Text style = {styles.text}> Username: </Text>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.props.usernameComponent(text)}}/>
                <Text style = {styles.text} > Password: </Text>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.setState({password: text})}}/>
                <View style = {styles.space}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        margin: 10,
        marginBottom:-10
    },
    textInput: {
        borderWidth: 2,
        color: "black",
        textAlign: "center",
        margin: 20
    },
    space: {
        marginTop:30
    }
})
