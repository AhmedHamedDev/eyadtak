import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { RolesService } from 'src/app/admin/services/roles.service';
import { Gender } from 'src/app/shared/models/Gender';
import { Role } from 'src/app/shared/models/Role';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  toggle:boolean = false;
  private Register: Subscription;
  private GetRolesDropDwon: Subscription;
  Roles: Role[];
  Genders: Gender[];

  constructor(
    private authService: AccountService,
    private toastr: ToastrService, 
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router) { }

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    genderId: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[+()0-9]+')]),
  }, this.pwdMatchValidator);

  get username() {return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get roleId() { return this.registerForm.get('roleId'); }
  get genderId() { return this.registerForm.get('genderId'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }


  ngOnInit(): void {
    this.GetRolesDropDwon = this.rolesService.GetRolesDropDwon().subscribe(response => {
      if (response.errorHappen == true){
        this.toastr.error(response.message, "Sorry :(")
        this.Roles = [];
      }
      else if (response.errorHappen == false){
        this.Roles = response.message;
        this.registerForm.controls.roleId.setValue(this.Roles.filter(x=>x.roleId == +this.route.snapshot.queryParams.role)[0]);
      }
    })

    this.Genders = [
      {genderId: 1, genderName: "Male"},
      {genderId: 2, genderName: "Female"}
    ];
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  register() {
    if(this.registerForm.valid){
      this.toggle = true;
      this.Register = this.authService.Register(this.registerForm.value)
        .subscribe(response => {
          this.toggle = false;
          if (response.errorHappen == true) {
              this.toastr.error(response.message, 'Validation Error!');
          }
          else {
            this.toastr.success('Register done successfully', 'Success');
            this.router.navigateByUrl('/account/login');
          }
        })
    }
  }

  ngOnDestroy() {
    this.Register?.unsubscribe();
    this.GetRolesDropDwon?.unsubscribe();
  }

}
