import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: this.props.name, //props name milik LoginForm
            username: "",
            password: ""
        }
    }

    onTekan(text) {
        alert(`Username anda adalah ${this.state.username}, dengan password ${this.state.password}`)
    }
    
    onChangeText(from, text) {
        if(from === "username") {
            this.setState({username: text})
        } else if (from === "password") {
            this.setState({password: text})
        }

    }

    render() {
        return (
            <View>
                <Text style={styles.text}> Hello {this.state.name}! Apa kabar? </Text>
                <Text style={styles.text}>Username: </Text>
                <TextInput style={styles.input} onChangeText = {this.onChangeText.bind(this, "username")}></TextInput>
                <Text style={styles.text}>Password: </Text>
                <TextInput style={styles.input} onChangeText = {this.onChangeText.bind(this, "password")}></TextInput>
                <Button title = "Login" style={styles.login} onPress={this.onTekan.bind(this,"Login")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "rgb(255, 255, 255)"
    },
    text: {
        color: "rgb(255, 255, 255)"
    }

})
