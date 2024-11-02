import { FEMALE } from '@/constants/gender'
import { EN } from '@/constants/language'

/* eslint-disable no-undef */
const STATE = {
  avatar: 'https://www.shutterstock.com/image-vector/vector-illustration-watercolor-style-portrait-600nw-2294597499.jpg',
  fullName: 'Alexa Rawles',
  email: 'alexarawles@gmail.com',
  gender: FEMALE,
  country: null,
  language: EN,
  timezone: null
}

export const { state, getter, mutation, ...store } = createStore('user', STATE)

export const user = getter('getUser', state => ({
  avatar: state.avatar,
  fullName: state.fullName,
  email: state.email,
  gender: state.gender,
  country: state.country,
  language: state.language,
  timezone: state.timezone,
}))

export const setUser = mutation('setUser', (state, { fullName, gender, email, country, language, timezone }) => {
  state.fullName = fullName
  state.gender = gender
  state.email = email
  state.country = country
  state.language = language
  state.timezone = timezone
})