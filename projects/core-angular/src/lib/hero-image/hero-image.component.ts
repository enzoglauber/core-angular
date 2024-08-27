import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeroImageBackdropTypesEnum } from './enum/hero-image-backdrop-types.enum';
import { HeroImageAnimationTypesEnum } from "./enum/hero-image-animation-types.enum";
import { CoreAngularService } from '../core-angular.service';

@Component({
  selector: 'und-hero-image',
  templateUrl: './hero-image.component.html'
})
export class HeroImageComponent implements OnInit, OnChanges {

  private isFadeinAnimating: boolean;
  private isFadeoutAnimating: boolean;

  changelogModal: boolean = false;

  changelogs = [
    "Alterar banner do carbono neutro na tela home.",
    "Adicionar novas tarifas no ambiente de produção.",
    "Criação de acessos de suporte em produção e gestor em homologação.",
    "Changelog - Criação do serviço (endpoint) para trazer os dados de atualização.",
    "Analise do comportamento na exibição da fatura com medição.",
    "Criação da estrutura do novo relatório de prorrogação.",
    "Número da reserva inicial em todos os relatórios.",
    "Analise da criação da nova opção de chamado no menu suporte ao cliente (Topdesk).",
    "Ajustes em bugs reportados no topdesk.",
    "Ajuste no comportamento de pesquisa pelo campo reserva nos relatórios.",
    "Ajuste na 'cor' da paginação do filho dos itens no relatório de Faturas.",
    "Ajuste no comportamento na tela de login com usuários inativados.",
    "Ajuste na consulta de reservas especificas (23289514) pelo relatório de reservas."
  ]

  @Input('animation')
  animationType: HeroImageAnimationTypesEnum;

  @Input('animationDelay')
  animationDelay = 3000;

  @Input('backdropType')
  backdropType: HeroImageBackdropTypesEnum

  @Input('backgroundImage')
  bgImage: string = '';

  @Input('versionApp') version: string = '';

  bgImageToStyle: string;

  constructor(private coreAngularService: CoreAngularService) { }

  get backdropTypes() {
    return HeroImageBackdropTypesEnum;
  }

  get animationTypes() {
    return HeroImageAnimationTypesEnum;
  }

  ngOnInit() {
    if (this.animationType === HeroImageAnimationTypesEnum.FADEIN) {
      this.startAnimation();
    }
    this.getChangelog();
  }

  getChangelog() {
    this.coreAngularService.getChangelog().subscribe(result => {
      if (result) {
        this.changelogs = result;
      }
    }, error => {
      console.log(error);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.bgImage.currentValue) {
      this.bgImageToStyle = '';
      return;
    }

    if (changes.bgImage.firstChange) {
      this.bgImageToStyle = `url(${changes.bgImage.currentValue})`;
    }
  }

  startAnimation() {
    window.setTimeout(() => {
      this.isFadeinAnimating = true;
      this.isFadeoutAnimating = true;
    }, this.animationDelay);
  }

  get fadeinClassNames() {
    return {
      ['und-hero-image__fadein']: true,
      ['--animating']: this.isFadeinAnimating,
    }
  }

  get fadeoutClassNames() {
    return {
      ['und-hero-image__fadeout']: true,
      ['--animating']: this.isFadeoutAnimating,
    }
  }

  openChangelog() {
    this.changelogModal = !this.changelogModal;
  }
}
