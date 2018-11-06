import React, { Component } from 'react'
import { View } from 'react-native'
import { ConversationHistory } from '../containers'

class Dialog extends Component {
  render() {
    return (
      <View>
        <ConversationHistory />
      </View>
    )
  }
}

export default Dialog
