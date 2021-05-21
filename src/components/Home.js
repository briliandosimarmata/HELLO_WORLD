import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    onPress(password) {
        if (password === "juaracoding") {
            this.props.navigation.navigate('Welcome', this.state)
        } else {
            alert("Password salah!")
        }

    }

    render() {
        return (
            <View>
                <Text style = {styles.text}> Username: </Text>
                    <TextInput style = {styles.textInput} onChangeText = {(text) => {this.setState({username: text})}}/>
                <Text style = {styles.text} > Password: </Text>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.setState({password: text})}}/>
                <View style = {styles.space}/>
                <Button title = "Login" onPress = {this.onPress.bind(this, this.state.password)}/>
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
