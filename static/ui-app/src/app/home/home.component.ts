import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elements: any = [];
  selectedValue: string = "typeSS"
  constructor(
    public api: DataService
  ) { }

  ngOnInit() {
    this.loadElements();
  }

  // Get elements list
  loadElements() {
    return this.api.getAllElements().subscribe((data: {}) => {
      this.elements = data;
    })
  }
  checkOne(value : string) {
    
    this.selectedValue = value;
    this.loadElements();
  }



}