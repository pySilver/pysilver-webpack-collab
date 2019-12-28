import { library, dom } from '@fortawesome/fontawesome-svg-core'

// @see: https://fontawesome.com/how-to-use/with-the-api/other/tree-shaking
import { faAngleDown } from '@fortawesome/pro-light-svg-icons/faAngleDown'
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons/faAngleRight'
import { faAngleUp } from '@fortawesome/pro-light-svg-icons/faAngleUp'
import { faArrowDown } from '@fortawesome/pro-light-svg-icons/faArrowDown'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/pro-light-svg-icons/faArrowRight'
import { faArrowUp } from '@fortawesome/pro-light-svg-icons/faArrowUp'
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars'
import { faCheck } from '@fortawesome/pro-light-svg-icons/faCheck'
import { faEye } from '@fortawesome/pro-light-svg-icons/faEye'
import { faHeart } from '@fortawesome/pro-light-svg-icons/faHeart'
import { faLongArrowAltUp } from '@fortawesome/pro-light-svg-icons/faLongArrowAltUp'
import { faSearch } from '@fortawesome/pro-light-svg-icons/faSearch'
import { faShoppingCart } from '@fortawesome/pro-light-svg-icons/faShoppingCart'
import { faStar } from '@fortawesome/pro-solid-svg-icons/faStar'
import { faThumbsDown } from '@fortawesome/pro-light-svg-icons/faThumbsDown'
import { faThumbsUp } from '@fortawesome/pro-light-svg-icons/faThumbsUp'
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser'
import { faUserAstronaut } from '@fortawesome/pro-light-svg-icons/faUserAstronaut'

// We are only using the user-astronaut icon
library.add(
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faCheck,
  faEye,
  faHeart,
  faLongArrowAltUp,
  faSearch,
  faShoppingCart,
  faStar,
  faThumbsDown,
  faThumbsUp,
  faUser,
  faUserAstronaut,
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()

// Output:

// $ encore production --progress
// Running webpack ...

// 98% after emitting SizeLimitsPlugin DONE  Compiled successfully in 519ms                                                                                                        10:10:21 PM

// I  3 files written to assets/dist
// Entrypoint theme = runtime.b6c4a98f.js 0.7eb89294.js theme.ed37ead7.js
// ✨  Done in 1.76s.