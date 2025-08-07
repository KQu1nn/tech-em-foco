// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faSearch, faRss, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular, faHeart as faHeartRegular, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faXTwitter,
  faGithub,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

library.add(faXTwitter, faGithub, faInstagram, faFacebook)
library.add(faRss, faSearch, faArrowRight, faEnvelopeRegular, faCalendar, faClock, faArrowTrendUp, faHeart, faHeartRegular)

export { FontAwesomeIcon }
