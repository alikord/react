import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Footer extends Component {
  render () {
    return (
      <View style={styles.footer}>
        <Text style={styles.text1}>{this.props.count}</Text>
        <Text style={styles.text}>تعداد کارها :</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({

  footer:
      {
        flexDirection: "row"
      },
  text:
      {
        fontSize:25,
      },
  text1:
      {
        fontSize:22,
        paddingLeft: 10
      }

});