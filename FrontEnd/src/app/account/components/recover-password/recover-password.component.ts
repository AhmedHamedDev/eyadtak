import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit, OnDestroy {

  notValidEmail: boolean = false;
  toggle:boolean = false;
  private RecoverPassword: Subscription;
  private RecoverPasswordValidateToken: Subscription;

  constructor(
    private authService: AccountService,
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute) { }

    recoverPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required]),
    recoveryCode: new FormControl('', [Validators.required]),
  }, this.pwdMatchValidator);

  get email() { return this.recoverPasswordForm.get('email'); }
  get password() { return this.recoverPasswordForm.get('password'); }
  get confirmPassword() { return this.recoverPasswordForm.get('confirmPassword'); }
  get recoveryCode() { return this.recoverPasswordForm.get('recoveryCode'); }


  ngOnInit(): void {
    this.RecoverPasswordValidateToken = this.authService.RecoverPasswordValidateToken(this.route.snapshot.queryParams.token).subscribe(response => {
      if (response.errorHappen == true){
        this.notValidEmail = true;
      }
      else if (response.errorHappen == false){
        this.recoverPasswordForm.controls.email.setValue(response.message);
        this.notValidEmail = false;
      }
    })
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  recoverPassword() {
    this.toggle = true;
    this.RecoverPassword = this.authService.RecoverPassword(this.recoverPasswordForm.value)
      .subscribe(response => {
        this.toggle = false;
        if (response.errorHappen == true) {
            this.toastr.error(response.message, 'Error!');
        }
        else {
          this.toastr.success(response.message, 'Done');
          this.router.navigateByUrl('/account/login');
        }
      })
  }

  ngOnDestroy() {
    this.RecoverPassword?.unsubscribe();
    this.RecoverPasswordValidateToken?.unsubscribe();
  }

}
