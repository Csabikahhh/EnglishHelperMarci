import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginRequest } from 'src/app/interfaces/user-interface';
import { AccountService } from 'src/app/services/common/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginRequest: LoginRequest = {} as LoginRequest;

  constructor(public accountService: AccountService, private router: Router, public translate: TranslateService) { }

  login() {
    this.accountService.login(this.loginRequest).subscribe({
      next: _ => {
        this.router.navigateByUrl('/words');
      }
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}