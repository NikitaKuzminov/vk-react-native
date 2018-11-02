import React, { Component } from 'react'
import { FlatList, Text, Button, View } from 'react-native'

class Friends extends Component {
  componentWillMount() {
    const { tokenCode, userId, addFriends } = this.props
    addFriends({ userId: userId, tokenCode: tokenCode })
  }

  render() {
    const { friendlist } = this.props
    return (
      <View>
        <Text>Friend List</Text>
        {friendlist ? (
          <FlatList
            data={friendlist}
            renderItem={({ item }) => (
              <Text onPress={() => this._sendMessage(item.id)}>
                {item.first_name}
              </Text>
            )}
            keyExtractor={item => item.id.toString()}
          />
        ) : null}
      </View>
    )
  }
  _sendMessage = id => {
    const { sendMessage, tokenCode } = this.props
    sendMessage({ id, message: 'test', tokenCode })
  }
}

export default Friends
