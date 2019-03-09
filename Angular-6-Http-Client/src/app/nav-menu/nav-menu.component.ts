import { Component, OnInit } from '@angular/core';
import { MenuNames } from '../menuNames';
import { CustomerService } from '../customer.service';
import { LoginSuccess } from '../loginSuccess';
import { Subject } from 'rxjs';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuList: MenuNames[];
  public loginSuccess: LoginSuccess;
  private isLoggedIn = new Subject<boolean>();
  public logOutSuccess: string;



  constructor(private navBarService: NavBarService) {
    this.menuList = this.navBarService.getLinks();
  }
  //{ type: 'server', name: 'test server', content: 'Just a test!' }];


  getMenusData() {
    return [
      new MenuNames(1, 'login', 'Login', true,null),
      new MenuNames(2, 'customers', 'Retrieve', true,null),
      new MenuNames(3, 'customer/add', 'Create', true,null),
    ];

  }

  ngOnInit(): void {
  }


  menuClick(caption: string) {
    window.alert("test" + caption);
    this.logOutSuccess = "";
    if (caption === 'Logout') {
      this.loginSuccess = null;
      this.logOutSuccess = "You have been Logged out Successfully...";
      this.navBarService.updateLoginStatus(false);
    } else if (caption !== 'Login') {
      this.loginSuccess = new LoginSuccess(null, false, null);
    }

  }


}
