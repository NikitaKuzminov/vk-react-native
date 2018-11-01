import React, { Component } from 'react'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import AppNavigator from '../navigator/'

const Navigator = reduxifyNavigator(AppNavigator, 'root')

export default Navigator
