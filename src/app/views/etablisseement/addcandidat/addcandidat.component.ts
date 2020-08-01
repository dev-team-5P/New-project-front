import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToasterService } from 'angular2-toaster';
import { EtablissementService } from '../../../services/etablissement.service';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {

  addcandForm: FormGroup;
  hide = true;

  constructor(private auth: AuthService,
    private router: Router,
    private toastr: ToasterService ,
    private etablissement: EtablissementService) { }

  ngOnInit(): void {
    this.addcandForm = new FormGroup ({
      nom: new FormControl ('', Validators.required),
      prenom: new FormControl ('', Validators.required),
      adresse: new FormControl ('', Validators.required),
      telephone: new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  addCandidat() {
    this.etablissement.addcand(this.addcandForm.value).subscribe(
      () => {
        this.router.navigate(['/etablissement/addcandidat']);
      },
      // (err) => {
      //   // return this.toastr.pop('warning', 'Args Title', 'Args Body');
      // }
    );
  }

}