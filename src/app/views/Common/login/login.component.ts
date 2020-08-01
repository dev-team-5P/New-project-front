import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  hide = true;
  constructor(    private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
  this.auth.signin(this.LoginForm.value).subscribe(
    (res: any) => {
      localStorage.setItem("token", res.message);
      // this.toastr.pop('success', 'Args Title', 'Args Body');
      this.router.navigateByUrl("/dashboard");
    },
    // (err) => {
    //   return this.toastr.pop('warning', 'Args Title', 'Args Body');
    // }
  );
}
}