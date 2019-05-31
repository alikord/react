import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder='عنوان کار خود را وارد نمائید'
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          blurOnSubmit={false}
          returnKeyType='done'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 16,
    textAlign: 'right'
  },
  touchable: {
    fontSize: 30,
    color: '#00BCD4'
  }
})
