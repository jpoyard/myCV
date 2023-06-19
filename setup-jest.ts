import '@angular/localize/init';
import 'jest-preset-angular/setup-jest';
import { TextDecoder, TextEncoder } from 'util';

// @ts-ignore
Object.assign(global, { TextDecoder, TextEncoder });
