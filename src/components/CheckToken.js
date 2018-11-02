import React, { Component } from 'react'
import { Text, View } from 'react-native'

class CheckToken extends Component {
  componentWillMount() {
    const { token, getConversations } = this.props
    if (!token) {
      this.props.navigation.navigate('Login')
    } else {
      getConversations(token)
    }
  }

  render() {
    const { token } = this.props
    return (
      <View>
        <Text>{token}</Text>
      </View>
    )
  }
}

export default CheckToken
