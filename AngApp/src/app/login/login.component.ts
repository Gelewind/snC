import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../getdata.service';
// import { LoginData } from '../Interfaces/login-data';
import { Router } from '@angular/router';


interface LoginForm{
  lic: number;
  pw: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = {lic: 0, pw: ''};
  constructor( private router: Router, private getdataService: GetdataService) { }

  ngOnInit(): void {
  }

  Login(loginForm: LoginForm) {
//    console.log('lic=' + loginForm.lic + 'pw=' + loginForm.pw);
  //  this.getdataService.login(loginData: LoginData);
    this.getdataService.authen(loginForm.lic, loginForm.pw).subscribe({
      next: data => {
        this.getdataService.login(data);
        console.log('data.lic=' + data.lic + ' data.auth=' + data.auth + ' data.admin=' + data.admin);
        if (data.admin) {
          this.router.navigate(['/Home']);
        } else if (data.auth) {
          this.router.navigate(['/Aanwezig' ]);
        }
      },
      error: error => console.error('There was an error!', error)
    });
  }
}
