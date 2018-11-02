export const sendMessage = (user_id, message, tokenCode) =>
  fetch(
    `https://api.vk.com/method/messages.send?user_id=${user_id}&message=${message}&access_token=&v=5.87`,
  ).then(res => console.log(res.json()))
