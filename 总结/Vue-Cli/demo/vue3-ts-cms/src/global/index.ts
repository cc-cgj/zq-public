import { App } from 'vue'
import registerElementComponents from './register-element'

export const registerApp = {
  install(app: App): void {
    registerElementComponents(app)
  }
}

// export function registerApp(app: App): void {
//   registerElementComponents(app)
// }
