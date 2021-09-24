import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  private isCollapsed: boolean = true;

  ngOnInit(): void {
  }

  public isSidebarCollapsed(): boolean {
    return this.isCollapsed;
  }

  public toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
