import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  login(){
    //El servicio authService.login ya redirecciona
    //en caso de inicio de sesion positivo
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
