export const getFriendList = (id, token) =>
  fetch(
    `https://api.vk.com/method/friends.get?user_id=${id}&fields=domain&access_token=${token}&v=5.87`,
  )
    .then(res => res.json())
    .then(res => res.response)
