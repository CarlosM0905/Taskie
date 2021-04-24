import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user;
  constructor(
    private authService: AuthService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'))
   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
  }

}
