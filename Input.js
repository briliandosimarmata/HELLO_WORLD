import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.textInput}>{this.props.textInput}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        color: 'black',
        fontSize: 60,
    }
})
