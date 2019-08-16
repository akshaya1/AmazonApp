import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
