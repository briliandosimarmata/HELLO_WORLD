import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    onText() {
        alert(`Username: ${this.state.username}, password: ${this.state.password}`)
    }


    render() {
        return (
            <View>
                <Text style = {styles.textStyle}> Username: </Text>
                <TextInput style = {styles.inputStyle} onChangeText = {(data) => {this.setState({username: data})}}/>
                <Text style = {styles.textStyle}> Password: </Text>
                <TextInput style = {styles.inputStyle} onChangeText = {(data) => {this.setState({password: data})}}/>
                <View style = {styles.section} />
                <Button title="Login" color = "blue" onPress = {() => this.props.navigation.navigate('NewApp')}/>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 10,
    },
    inputStyle: {
        borderWidth: 10,
        color: "black",
        textAlign: "center",
        borderColor: "red"
    },
    section: {
        marginHorizontal: 20
    }
})
