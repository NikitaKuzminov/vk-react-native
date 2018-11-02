import React from 'react'
import { parse } from 'qs'
import { WebView } from 'react-native'

const Login = ({ login }) => {
  return (
    <WebView
      source={{
        uri:
          'https://oauth.vk.com/authorize?client_id=6738023&scope=friends,messages&redirect_uri=https://oauth.vk.com/blank.html',
      }}
      onNavigationStateChange={response => {
        const responseParams = parse(response.url.split('#')[1])
        const authCode = responseParams.code
        if (authCode && !response.loading) {
          login(authCode)
        }
      }}
    />
  )
}

export default Login
