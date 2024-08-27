export class BaseComponent {
  readonly appPrefix = 'und';
  readonly cssPrefix: string;
  constructor(appSelector: string) {
    this.cssPrefix = `${this.appPrefix}-${appSelector}`;
  }
}
