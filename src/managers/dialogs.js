export const sendMessage = (user_id, message, tokenCode) =>
  fetch(
    `https://api.vk.com/method/messages.send?user_id=${user_id}&message=${message}&access_token=&v=5.87`,
  )

export const getConverstaions = access_token =>
  fetch(
    `https://api.vk.com/method/messages.getConversations?access_token=${access_token}&v=5.87`,
  )
    .then(res => res.json())
    .then(json => ({
      error: json.error,
      response: json.response,
    }))
