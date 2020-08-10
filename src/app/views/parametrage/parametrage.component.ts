import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SuperadminService } from '../../services/superadmin.service';
import * as jwt_decode from 'jwt-decode';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})
export class ParametrageComponent implements OnInit {
  parametrageForm: FormGroup;
  modifpassForm: FormGroup;
  decoded = jwt_decode(this.Superadmin.token);
  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;

  constructor(private Superadmin: SuperadminService,
    private toasterService: ToasterService
    ) { }

  ngOnInit(): void {
    this.parametrageForm = new FormGroup ({
      name: new FormControl (this.decoded.data.name, Validators.required),
      email: new FormControl(this.decoded.data.email, [Validators.required, Validators.email])
    });
    this.modifpassForm = new FormGroup({
       oldpass: new FormControl('', Validators.required),
      newpass: new FormControl('', Validators.required)
    });

  }
  Save() {
    this.Superadmin.parametrageducompte(this.decoded.data._id, this.parametrageForm.value).subscribe((res: any) => {
      console.log(res);
      this.toasterService.pop('success', 'success', 'modification has been saved');
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
  Savepass() {
    this.Superadmin.modifPassadmin(this.decoded.data._id, this.modifpassForm.value).subscribe((res: any) => {
      console.log(res);
      this.toasterService.pop('success', 'success', 'modification has been saved');
    },
    (err) => {
      this.toasterService.pop('error', 'Erreur', 'something wrong');
    }
  );
}
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  collapsed1(event: any): void {
    // console.log(event);
  }

  expanded1(event: any): void {
    // console.log(event);
  }

}
