import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit, OnDestroy {
  showSuccessMessage: boolean = null;

  private subscripe1: Subscription;
  private subscripe2: Subscription;

  constructor(private toastr: ToastrService, private router: Router, private accountService: AccountService, private activatedRoute: ActivatedRoute) { }
  
  ngOnDestroy(): void {
    this.subscripe1?.unsubscribe();
    this.subscripe2?.unsubscribe();
  }

  ngOnInit(): void {

    this.subscripe1 = this.activatedRoute.queryParams.subscribe(params => {
      this.subscripe2 = this.accountService.ActivateAccount(params['token']).subscribe(response => {
        if (response.errorHappen == true){
          this.toastr.error(response.message, "Sorry :(")
          this.showSuccessMessage = false
        }
        else if (response.errorHappen == false){
          this.toastr.success(response.message, "Done")
          this.showSuccessMessage = true
        }
      })
    });

  }

}
