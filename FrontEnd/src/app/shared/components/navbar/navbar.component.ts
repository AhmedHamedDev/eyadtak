import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faProjectDiagram, faTable, faEnvelopeOpenText, faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/services/account/account.service';
import { AuthSubjectService } from '../../services/auth-subject/auth-subject.service';
import { Abilities } from '../../enums/Abilities'
import { NavbarSubjectService } from '../../services/navbar-subject/navbar-subject.service';
import { NavbarElement } from '../../models/Navbar';
import { HitCanvas } from 'konva/types/Canvas';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faProjectDiagram = faProjectDiagram;
  faTable = faTable;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faGrinAlt = faGrinAlt;
  thereIsNewNotification: boolean = false;
  abilities: number[];
  Abilities = Abilities;
  userName: string;
  userEmail: string;
  level1: NavbarElement[];

  constructor(private navbarSubjectService: NavbarSubjectService, private toastr: ToastrService, private router: Router, private authSubjectService: AuthSubjectService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.authSubjectService.getSubject().subscribe(res => {
      this.abilities = res.abilitiesIds;
      this.userName = res.name;
      this.userEmail = res.email;

      this.refresh()
    })
  }

  refresh(){
    this.navbarSubjectService.getSidebarLinkSelectedSubject().subscribe(parentId => {
      this.navbarSubjectService.getNavbarMessageSubject().subscribe(res => {
        this.level1 = res.level1?.filter(x=>x.parentId == parentId);
      })
    })
  }

  logout() {
    let token = localStorage.getItem("token");
    this.accountService.Logout(token).subscribe(x => {
      localStorage.removeItem('token');
      localStorage.removeItem('abilitiesIds');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      this.authSubjectService.next({});
      this.toastr.success('Logout done successfully', 'Success');
      this.router.navigateByUrl('/account/login');
    });
  }
}
