import {HelloI, greetingsI} from './interfaces'

export default class hello implements HelloI {
    greetings = {
        hey: 'hello world!'
    }

    constructor(greet:string) {
        return <any>this.greetings.hey
    }
}
