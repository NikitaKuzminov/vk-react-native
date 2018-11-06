import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Conversations from './Conversations'

class CheckToken extends Component {
  componentDidMount() {
    const { getConversationsRequest } = this.props
    getConversationsRequest()
  }

  render() {
    const { conversations, getHistoryRequest } = this.props
    return (
      <View>
        {conversations.length ? (
          <Conversations
            conversations={conversations}
            getHistoryRequest={getHistoryRequest}
          />
        ) : (
          <Text>Диалогов нет</Text>
        )}
      </View>
    )
  }
}

export default CheckToken
