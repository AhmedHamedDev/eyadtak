import { Component, OnInit } from '@angular/core';
import { NavbarElement } from '../../models/Navbar';
import { AuthSubjectService } from '../../services/auth-subject/auth-subject.service';
import { NavbarSubjectService } from '../../services/navbar-subject/navbar-subject.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  level0: NavbarElement[] = [];
  Abilities

  constructor(private navbarSubjectService: NavbarSubjectService, private authSubjectService: AuthSubjectService) { }

  ngOnInit(): void {

    this.authSubjectService.getSubject().subscribe(res => {
      this.Abilities = res.abilitiesIds;
      this.refresh()
    })

  }

  refresh(){
    let added: number[] = [];
    this.navbarSubjectService.getNavbarMessageSubject().subscribe(res => {
      let level1 = res.level1;
      res.level0?.forEach(lvl0Element => {
        let lvl1 = level1.filter(x => x.parentId == lvl0Element.id);
        lvl1.forEach(lvl1Element => {
          if ( this.Abilities.includes(lvl1Element.abilityId) && !added.includes(lvl0Element.id)){
            this.level0.push(lvl0Element);
            added.push(lvl0Element.id)
          }
        });
      });
    })
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  sidebarLinkClick(id) {
    this.navbarSubjectService.nextSidebarLinkSelect(id);
  }

  mouseover(e){
    e.target.children[0].style.color = "#f1f1f1";
  }

  mouseout(e){
    e.target.children[0].style.color = "#818181"
  }
}
