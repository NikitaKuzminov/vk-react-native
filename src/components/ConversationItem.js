import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import styled from 'styled-components'

const ThumbImage = styled(Image)`
  width: 80;
  height: 80;
  border-radius: 40;
`

const Container = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: black;
`

class ConversationItem extends Component {
  render() {
    const { item, getHistoryRequest } = this.props
    return (
      <Container>
        {item.opponent ? (
          <ThumbImage
            source={{
              uri: item.opponent.photo_100,
            }}
          />
        ) : null}
        <Text onPress={() => getHistoryRequest(item.id)}>
          {item.opponent
            ? item.opponent.first_name || item.opponent.name
            : null}
        </Text>
      </Container>
    )
  }
}

export default ConversationItem
