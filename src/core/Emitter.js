export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // уведомляем слушателей если они есть(dispatch, fire, trigger)
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся или добавляем новго слушателя(on. listen)
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
      this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()

// emitter.subscribe('use', data => console.log('Sub:', data))

// emitter.emit('use', 42)
