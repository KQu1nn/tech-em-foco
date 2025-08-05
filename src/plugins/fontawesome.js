// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faArrowRight)

export { FontAwesomeIcon }
