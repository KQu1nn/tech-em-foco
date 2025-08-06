// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faSearch, faRss } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular, faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'

library.add(faRss)
library.add(faSearch)
library.add(faArrowRight)
library.add(faEnvelopeRegular)
library.add(faCalendar, faClock)

export { FontAwesomeIcon }
