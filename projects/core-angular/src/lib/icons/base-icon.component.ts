export class BaseIconComponent {
  readonly appPrefix = 'und-icon';
  readonly cssPrefix: string;
  constructor(appSelector: string) {
    this.cssPrefix = `${this.appPrefix}-${appSelector}`;
  }
}
