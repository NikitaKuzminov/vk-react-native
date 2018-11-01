import React from 'react'
import { parse } from 'qs'
import { WebView } from 'react-native'

const Login = ({ login }) => {
  return (
    <WebView
      source={{
        uri:
          'https://oauth.vk.com/authorize?client_id=6738023&scope=friends&redirect_uri=',
      }}
      onNavigationStateChange={response => {
        const responseParams = parse(response.url.split('#')[1])
        const token = responseParams.code
        if (token && !response.loading) {
          login(token)
        }
      }}
    />
  )
}

export default Login
