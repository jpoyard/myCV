import { Injectable, Signal, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';

export interface ExternalApiConfig {
  icons: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  externalApi: Signal<ExternalApiConfig>;

  constructor() {
    this.externalApi = signal(environment.api);
  }
}
