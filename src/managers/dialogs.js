import { getConversationsFailure } from '../actions'

export const sendMessage = (user_id, message, tokenCode) =>
  fetch(
    `https://api.vk.com/method/messages.send?user_id=${user_id}&message=${message}&access_token=&v=5.87`,
  )

export const getConverstaions = access_token =>
  fetch(
    `https://api.vk.com/method/messages.getConversations?access_token=${access_token}&extended=1&v=5.87`,
  )
    .then(res => res.json())
    .then(json => ({
      error: json.error,
      response: getResponse(json.response),
    }))
    .catch(err => console.log(err))

const getResponse = json => {
  try {
    let newJson = json.items.map(item => ({
      type: item.conversation.peer.type,
      id: item.conversation.peer.id,
      unread_count: item.conversation.peer.unread_count,
    }))
    json.profiles.map(item =>
      newJson.map(
        conv => (conv.id === item.id ? (conv.opponent = item) : null),
      ),
    )
    json.groups.map(item =>
      newJson.map(
        conv => (conv.id === -item.id ? (conv.opponent = item) : null),
      ),
    )
    json.items.map(item =>
      newJson.map(
        conv =>
          conv.id === item.conversation.peer.id &&
          item.conversation.peer.type === 'chat'
            ? (conv.opponent = {
                name: item.conversation.chat_settings.title,
                member_count: item.conversation.chat_settings.member_count,
                photo_100: item.conversation.chat_settings.photo
                  ? item.conversation.chat_settings.photo.photo_100
                  : 'https://vk.com/images/camera_100.png?ava=1',
              })
            : null,
      ),
    )
    return newJson
  } catch (err) {
    getConversationsFailure()
    return null
  }
}

export const getHistory = ({ access_token, id }) =>
  fetch(
    `https://api.vk.com/method/messages.getHistory?access_token=${access_token}&user_id=${id}&v=5.87`,
  )
    .then(res => res.json())
    .then(json => json.response.items)
