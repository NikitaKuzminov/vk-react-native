import React from 'react'
import { View } from 'react-native'
import { Friends, CheckToken } from '../containers'

const Home = ({ navigation }) => (
  <View>
    <CheckToken navigation={navigation} />
  </View>
)

export default Home
