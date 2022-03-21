import { User } from './service/user';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users: any;
  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit(): void {

    this.dashboardService.getUsers().subscribe((x) => {
      this.users = x;
    });

    console.log('entrou dashboard')


  }

}
