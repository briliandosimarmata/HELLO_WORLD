import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Welcome extends Component {
    render() {
        return (
            <View>
                <Text> Selamat datang {this.props.route.params.username} !</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
