import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import UsernameComponent from './UsernameComponent'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
        }
    }
    
    render() {
        return (
            <View>
                <Text>{this.props.count}</Text>
                <UsernameComponent usernameComponent = {(text) => {this.props.usernameComponent(text)}}/>
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
