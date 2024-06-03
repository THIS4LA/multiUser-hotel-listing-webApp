import { randomBytes } from 'crypto';

const randomString = randomBytes(256).toString('base64');
console.log(randomString);
