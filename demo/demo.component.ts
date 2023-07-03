import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  error: any;
  searchId: any;
  activityService: any;
  activity: any;

  constructor() { }

  searchActivity(): void {
    if (this.searchId) {
      this.activityService.getActivityById(this.searchId)
        .subscribe(
          (data: any) => {
            this.activity = data;
            this.error = null;
          },
          () => {
            this.activity = null;
            this.error = 'Activity not found.';
          }
        );
    }
  }

}
