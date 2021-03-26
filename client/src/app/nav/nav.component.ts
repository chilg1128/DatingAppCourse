import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(): void {
    // tslint:disable-next-line: deprecation
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.user = JSON.parse(localStorage.getItem('user'));
      }, error => {
      console.log(error);
    });
  }

  logout(): void {
    this.accountService.logout();

  }

}
