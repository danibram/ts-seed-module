import { HelloI } from './interfaces';
export default class hello implements HelloI {
    greetings: {
        hey: string;
    };
    constructor(greet: string);
}
