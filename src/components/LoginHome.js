import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import LoginComponent from './LoginComponent'

export default class LoginHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            count: 0
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.username}</Text>
                <LoginComponent count = {this.state.count} usernameComponent = {(name) => {this.setState({username: name})}} />
                <Button title = "Login" onPress = {()=>{this.setState({count: this.state.count+1})}}/>
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
