import { AsyncStorage } from 'react-native'

export const setToken = token => {
  AsyncStorage.setItem('userToken', token)
}

export const getToken = () => AsyncStorage.getItem('userToken')
