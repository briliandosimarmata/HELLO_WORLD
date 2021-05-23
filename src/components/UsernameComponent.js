import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'

export default class UsernameComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }


    render() {
        return (
            <View>
                <Text style = {styles.text}> Username: </Text>
                <TextInput style = {styles.textInput} onChangeText = {(text) => {this.props.usernameComponent(text)}}/>
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
