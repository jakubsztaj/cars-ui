import { Component } from '@angular/core';
import { StatisticsService } from "../../service/statistics.service";
import { Statistics } from "../../model/Statistics";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {


  constructor(statisticsService: StatisticsService) {
    this.statisticsService = statisticsService;
    this.getStats();
  }

  displayedColumns: string[] = ['name', 'value', 'menu'];
  statisticsService;
  statistics: Statistics[] = [];

  getStats(): void {
    this.statisticsService.getAllStatistics()
      .subscribe(data => {
        this.statistics = data;
      })

  }

}

