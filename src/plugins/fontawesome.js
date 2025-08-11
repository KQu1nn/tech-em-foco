// src/plugins/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShare, faShareAlt, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight, faSearch, faRss, faArrowTrendUp, faArrowLeft, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular, faHeart as faHeartRegular, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import {
  faXTwitter,
  faGithub,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

// Adiciona todos os ícones à biblioteca
library.add(
  faXTwitter, faGithub, faInstagram, faFacebook,
  faRss, faSearch, faArrowRight, faEnvelopeRegular,
  faCalendar, faClock, faBars, faArrowTrendUp,
  faHeart, faHeartRegular, faArrowLeft, faUser
)
library.add(faLock)
library.add(faShare, faShareAlt, faShareNodes)

export { FontAwesomeIcon }
