import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {

  toggle: boolean = false;
  private Login: Subscription;

  constructor(
    private authService: AccountService,
    private toastr: ToastrService,
    private router: Router) { }

    forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email() { return this.forgetPasswordForm.get('email'); }

  ngOnInit(): void {
  }

  sendCode() {
    this.toggle = true;
    this.Login = this.authService.SendForgetPasswordCode(this.forgetPasswordForm.value.email)
      .subscribe(response => {
        this.toggle = false;
        if (response.errorHappen == true) {
            this.toastr.error(response.message, 'Validation Error!');
        }
        else {
            this.toastr.success(response.message, 'Done');
            this.router.navigateByUrl('/account/login');
        }
      })
  }

  ngOnDestroy() {
    this.Login?.unsubscribe();
  }

}
