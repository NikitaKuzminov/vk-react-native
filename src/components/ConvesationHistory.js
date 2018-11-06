import React, { Component } from 'React'
import { FlatList, Text, View } from 'react-native'

class ConversationHistory extends Component {
  componentDidMount() {
    const { conversationHistory } = this.props

    console.log('lol kek', conversationHistory)
  }

  render() {
    const { conversationHistory } = this.props
    return (
      <View>
        <FlatList
          data={conversationHistory}
          renderItem={({ item }) => <Text>{item.text}</Text>}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => console.log('here2')}
        />
      </View>
    )
  }
}

export default ConversationHistory
