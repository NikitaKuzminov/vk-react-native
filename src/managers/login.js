export const getAccessToken = code =>
  fetch(
    `https://oauth.vk.com/access_token?client_id=6738023&client_secret=hK5EJNf3Jr4NIV6CNiwk&code=${code}&redirect_uri=https://oauth.vk.com/blank.html`,
  )
    .then(res => res.json())
    .then(json => ({
      access_token: json.access_token,
      expires_in: json.expires_in,
    }))
