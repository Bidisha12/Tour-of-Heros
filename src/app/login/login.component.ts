import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

const email = document.getElementById('txt');
const password = document.getElementById('txt pwd');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService],
})
export class LogInComponent implements OnInit {
  status = false;
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    const txt1 = (document.getElementById('uname') as HTMLInputElement).value;
    const txt2 = (document.getElementById('password') as HTMLInputElement)
      .value;
    let txt3 = Number(txt2);

    fetch('https://login-11034-default-rtdb.firebaseio.com/users.json')
      .then((res) => res.json())
      .then((res) => {
        Object.keys(res);
        let result = Object.values(res).forEach((element: any) => {
          console.log(element.username);
          debugger;
          if (element.username === txt1 && element.password === txt3) {
            this.status = true;
          }
        });
        //return false;
        if (this.status) {
          alert('login sucessfully');
          localStorage.setItem('isLoggedin', 'true');
          // this.router.navigate(['dashboard']);
          this.router.navigate(['/dashboard']);
        } else {
          alert('login failed');
        }
      });
  }

  ngOnInit() {}
}
