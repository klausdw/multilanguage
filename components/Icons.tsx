import {
	IconLookup,
	IconDefinition,
	findIconDefinition,
	library,
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCheck, fas } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

library.add(fas, fab, faFacebook, faInstagram, faWhatsapp, faCheck)

const facebookIcon: IconLookup = { prefix: 'fab', iconName: 'facebook' }
const facebookDefinition: IconDefinition = findIconDefinition(facebookIcon)
export const Facebook: React.FC = () => (
	<a
		href="https://www.facebook.com/abconnectionberlim/"
		target="_blank"
		rel="nofollow"
		className="mx-2"
	>
		<FontAwesomeIcon icon={facebookDefinition} size="2x" />
	</a>
)

const instagramIcon: IconLookup = { prefix: 'fab', iconName: 'instagram' }
const instagramDefinition: IconDefinition = findIconDefinition(instagramIcon)
export const Instagram: React.FC = () => (
	<a
		href="https://www.instagram.com/ab.connection/"
		target="_blank"
		rel="nofollow"
		className="mx-2"
	>
		<FontAwesomeIcon icon={instagramDefinition} size="2x" />
	</a>
)

const whatsappIcon: IconLookup = { prefix: 'fab', iconName: 'whatsapp' }
const whatsappDefinition: IconDefinition = findIconDefinition(whatsappIcon)
const phoneNumber = '+491747021549'
export const Whatsapp: React.FC = () => (
	<a
		href={`https://api.whatsapp.com/send?${phoneNumber}&text=Hallo%2C%20AB-Connection%20Team!`}
		target="_blank"
		className="mx-2"
	>
		<FontAwesomeIcon icon={whatsappDefinition} size="2x" />
	</a>
)

const checkIcon: IconLookup = { prefix: 'fas', iconName: 'check' }
const checkDefinition: IconDefinition = findIconDefinition(checkIcon)
export const Check: React.FC = () => (
	<FontAwesomeIcon icon={checkDefinition} size="xs" className="text-blue-400 mr-2" />
)
