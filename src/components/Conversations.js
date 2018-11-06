import React, { Component } from 'React'
import { FlatList, Text, View } from 'react-native'
import ConversationItem from './ConversationItem'

class Conversations extends Component {
  render() {
    const { conversations, getHistoryRequest } = this.props
    return (
      <View>
        <FlatList
          data={conversations}
          renderItem={({ item }) => (
            <ConversationItem
              item={item}
              getHistoryRequest={getHistoryRequest}
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => console.log('here')}
        />
      </View>
    )
  }
}

export default Conversations
