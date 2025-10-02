// https://leetcode.com/problems/event-emitter

class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

    constructor() {
        this.subscriptions = {}
    }
    
    subscribe(eventName, callback) {
        if (!this.subscriptions.hasOwnProperty(eventName)) {
            this.subscriptions[eventName] = []
        }

        this.subscriptions[eventName].push(callback)

        return {
            unsubscribe: () => {
              let id = this.subscriptions[eventName].indexOf(callback)
              if (id > -1) {
                this.subscriptions[eventName].splice(id, 1);
                return undefined;
              }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.subscriptions.hasOwnProperty(eventName)) {
            return [];
        }
        return this.subscriptions[eventName].map(callback => callback(...args))
    }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
const sub3 = emitter.subscribe("firstEvent", x => x + 3);
sub1.unsubscribe(); // undefined
sub2.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [6] but returns [8]