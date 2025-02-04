import { createDomain } from 'effector'
import { AllowedLangs } from '../constants/language'

const lang = createDomain()
export const setLang = lang.createEvent<AllowedLangs>()

export const $lang = lang
  .createStore(AllowedLangs.RU)
  .on(setLang, (_, lang) => lang)

  
