import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private http: HttpClient, private accountService: AccountService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.setCurrentUser();
  }
  setCurrentUser(){
    const user: User= JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }

}
