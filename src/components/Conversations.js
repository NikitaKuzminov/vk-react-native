import React, { Component } from 'React'
import { FlatList, Text, View } from 'react-native'
import ConversationItem from './ConversationItem'

class Conversations extends Component {
  render() {
    const { conversations } = this.props
    return (
      <View>
        <FlatList
          data={conversations}
          renderItem={({ item }) => <ConversationItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}

export default Conversations
