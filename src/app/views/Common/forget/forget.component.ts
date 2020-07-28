import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  resetForm: FormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

}
