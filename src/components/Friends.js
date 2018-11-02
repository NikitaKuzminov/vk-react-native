import React, { Component } from 'react'
import { ListView, Text, Button, View } from 'react-native'

class Friends extends Component {
  render() {
    const { tokenCode, userId, addFriends } = this.props
    return (
      <View>
        <Text>Lool kek</Text>
        <Button
          title="Press me"
          onPress={() => addFriends({ userId: userId, tokenCode: tokenCode })}
        />
      </View>
    )
  }
}

export default Friends
