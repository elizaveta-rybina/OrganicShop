import { useLang } from '../../../hooks/useLang'
import Icon from '../../elements/Icon'
import styles from './smallHeader.module.css'

const SmallHeader = () => {
	const { lang, translations } = useLang()

	// const handleSwitchLang = (lang: string) => {
  //   setLang(lang as AllowedLangs)
  //   localStorage.setItem('lang', JSON.stringify(lang))
  // }

	// const handleSwitchLangToRu = () => handleSwitchLang('ru')
  // const handleSwitchLangToEn = () => handleSwitchLang('en')

	return (
		<div className={styles.smallHeader}>
			<div className={styles.location}>
				<Icon src={'/img/MapPin.svg'} alt='Иконка мини карты'/>
				<p className={styles.location__text}>
					{translations[lang].smallHeader.location}
				</p>
			</div>
		</div>
	);
};

export default SmallHeader;