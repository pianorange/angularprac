import { Injectable } from '@angular/core';

@Injectable()
export class I18nSupportService {
  private welcomeMSG;
  langCode = '';
  constructor() {
    this.welcomeMSG = {
      'ko' : '안녕하세요',
      'en' : 'Hello',
      'jp' : '始めまして',
      'fr' : 'Bonjour',
      'ch' : 'Nihao'
    };
  }

  getWelcomeMsgByCode( userName: string) {
    const helloMsg = this.welcomeMSG[this.langCode];
    return `${helloMsg}, ${userName}`;
  }
}
