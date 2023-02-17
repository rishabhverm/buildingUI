import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  private building: any[];

  constructor() {    this.building = JSON.parse(localStorage.getItem('building') || '[]');}

  
  public getAll() {
    return this.building;
  }

  public add(building: any) {
    building.id = Date.now();
    this.building.push(building);
    localStorage.setItem('building', JSON.stringify(this.building));
  }

getBuilding() {
  return JSON.parse(localStorage.getItem('building') || '[]');
}
}