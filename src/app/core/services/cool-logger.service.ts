import {Injectable} from '@angular/core';
import {messageType} from '../models/core.model'

@Injectable()
export class CoolLoggerService {

  log(message: string, messageType: messageType) {
    console.log(`%c${message}`, this.getMessageType(messageType))
  }

  getMessageType(messageType: messageType) {
    switch (messageType) {
      case 'error':
        return 'background:red;color:white;'
      case 'success':
        return 'background:green;color:white;'
      case 'warning':
        return 'background:yellow;color:white;'
      default:
        return ''
    }
  }
}
