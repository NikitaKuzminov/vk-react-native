import React, { Component } from 'React'
import { FlatList, Text, View } from 'react-native'
import ConversationItem from './ConversationItem'

class Conversations extends Component {
  render() {
    const { conversations } = this.props
    return (
      <View>
        <FlatList
          data={conversations.items}
          renderItem={({ item }) => <ConversationItem item={item} />}
          keyExtractor={item => item.conversation.peer.id.toString()}
        />
      </View>
    )
  }
}

export default Conversations
