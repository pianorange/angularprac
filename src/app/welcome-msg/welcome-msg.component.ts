import {AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit  {

  constructor(public i18nSupporter: I18nSupportService) { }
  private static CHK_KEYUP_WAIT_SEC = 5000;
  userName = '';
  userPassword = '';
  private valied = false;
  welcomeMsg= '';
  ngOnInit() {
  }

  showWelcomeMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName);
  }

  onChange() {
    this.valied = this.userName.length > 0;
  }
  setName(name) {
    this.userName = name;
  }
  setPassword(testval) {
    this.userPassword = testval;
  }
  // ngAfterViewInit() {
  // const checkTouchedFn = () => {
  //   if ( this.valied ) {
  //     return;
  //   }
  //   alert('이름을 입력하시오');
  // };
  // setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  // }
  // onKeyUp(name) {
  //   this.valied = name.length > 0;
  // }
}
