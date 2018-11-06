import React, { Component } from 'react'
import { View } from 'react-native'
import { Friends, CheckToken } from '../containers'

class Home extends Component {
  static navigationOptions = {
    title: 'Диалоги',
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <CheckToken navigation={navigation} />
      </View>
    )
  }
}

export default Home
