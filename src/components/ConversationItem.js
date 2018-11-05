import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ConversationItem extends Component {
  render() {
    const { item } = this.props
    return (
      <View>
        <Text>{item.conversation.peer.id}</Text>
      </View>
    )
  }
}

export default ConversationItem
