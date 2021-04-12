import Todo from "./Models/ToDo.js"
import Quote from "./Models/Quote.js"
import Image from "./Models/Images.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Quote} */
  quotes = null
  /** @type {Todo[]} */
  todo = []
  /** @type {Image} */
  images = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
