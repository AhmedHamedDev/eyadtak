import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavbarMessage } from '../../models/Navbar';
import { HomeService } from '../home/home.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarSubjectService {

  private static navbarMessage: NavbarMessage = new NavbarMessage();
  private static sidebarLinkSelect: number = 3;

  private static navbarMessageSubject = new BehaviorSubject(NavbarSubjectService.navbarMessage);
  private static sidebarLinkSelectedSubject = new BehaviorSubject(NavbarSubjectService.sidebarLinkSelect);

  constructor(private homeService: HomeService) { 
    this.homeService.GetNavbarElements().subscribe(res => {
      if(!res.errorHappen){
        this.nextNavbarMessage(res.message)
      }
    })
  }

  getNavbarMessageSubject(){
    return NavbarSubjectService.navbarMessageSubject;
  }

  nextNavbarMessage(navbarMessage: NavbarMessage){
    NavbarSubjectService.navbarMessage = navbarMessage;
    NavbarSubjectService.navbarMessageSubject.next(navbarMessage);
  }

  currentNavbarMessage(){
    return NavbarSubjectService.navbarMessageSubject.value;
  }

  getSidebarLinkSelectedSubject(){
    return NavbarSubjectService.sidebarLinkSelectedSubject;
  }

  nextSidebarLinkSelect(sidebarLinkSelect: number){
    NavbarSubjectService.sidebarLinkSelect = sidebarLinkSelect;
    NavbarSubjectService.sidebarLinkSelectedSubject.next(sidebarLinkSelect);
  }

  currentSidebarLinkSelect(){
    return NavbarSubjectService.sidebarLinkSelectedSubject.value;
  }
}
