import { $lang } from '../context/lang'
import translationJson from '../public/translations/translations.json'
import { useUnit } from 'effector-react'

export const useLang = () => {
  const lang = useUnit($lang)
  const translations = translationJson

  return { lang, translations }
}
