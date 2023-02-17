import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingService } from 'src/app/Services/building.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent {
  public building: any = {};
  constructor(private  buildingService: BuildingService,private router: Router) { }

  ngOnInit() {
  }

  public addbuilding() {
    this.buildingService.add(this.building);
    this.building = {};
    console.log("add building", this.building)
    this.router.navigate(['building'])
    alert("employee building configuration")
  }
}
