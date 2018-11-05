import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Conversations from './Conversations'

class CheckToken extends Component {
  componentDidMount() {
    const { getConversationsRequest } = this.props
    getConversationsRequest()
  }

  render() {
    const { conversations } = this.props
    return (
      <View>
        <Text>Диалоги</Text>
        {conversations.length ? (
          <Conversations conversations={conversations} />
        ) : (
          <Text>Диалогов нет</Text>
        )}
      </View>
    )
  }
}

export default CheckToken
