import { Component } from '@angular/core';
import { BuildingService } from 'src/app/Services/building.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss']
})
export class BuildingListComponent {
  building: any[]=[];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.building = this.buildingService.getBuilding();
  }
}
