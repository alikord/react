import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Row extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={style.text}> {this.props.text} </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: "BYekan"
    },
    text: {
        fontSize: 25,
        padding: 6,
        textAlign: "center",
        backgroundColor: "#9be7ff",
        fontFamily: "BYekan",


    }
});
