import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // heroes: Hero[] = [];
  heroes = [];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes.slice(1, 16));
    fetch('https://login-11034-default-rtdb.firebaseio.com/heroes.json')
      .then((res) => res.json())
      .then((res) => (this.heroes = res));
  }
  clearLocalStorage() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }
}

import { Router } from '@angular/router';

// constructor(private router:Router){
// }
// navigate(){
// //do your any operations
// this.router.navigate(['path']);
// //also you can pass like this,
//  this.router.navigateByURL(['path']);
// }
