import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { Component1Component } from '../right-section/component1/component1.component';
import { Component2Component } from '../right-section/component2/component2.component';
import { Component3Component } from '../right-section/component3/component3.component';
import { Component4Component } from '../right-section/component4/component4.component';
import { Component5Component } from '../right-section/component5/component5.component';
import { Component6Component } from '../right-section/component6/component6.component';
import { Component7Component } from '../right-section/component7/component7.component';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ApiObject } from 'src/app/models/api-object';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit, OnDestroy {

  disableButton: boolean = true;
  showAlert: boolean = false;
  ipSeparated: Array<string> = [];
  dataObjectOfApi: ApiObject = {};

  isMobileScreen?: boolean;

  // Array of component names
  componentNames: Array<string> = [
    'Component1',
    'Component2',
    'Component3',
    'Component4',
    'Component5',
    'Component6',
    'Component7'
  ];

  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getScreenSize();
    this.getBooleanOfDisableButton();
  }

  ngOnDestroy() {
    // Unsubscribe from window resize event when component is destroyed
    this.renderer.destroy();
  }

  checkScreenSize() {
    // Get window width
    const screenWidth = window.innerWidth;

    // Define breakpoint for small screen 
    const mobileBreakpoint = 768; 

    // Update isSmallScreen based on window width
    this.isMobileScreen = screenWidth < mobileBreakpoint;
  }

  getScreenSize() {
    this.checkScreenSize(); // Check screen size initially
    this.renderer.listen('window', 'resize', () => {
      this.checkScreenSize(); // Check screen size on window resize
    });
  }

  getDataOfIpAddress() {
    this.apiService.getDataOfIpAddress().subscribe(data => {
      this.dataObjectOfApi = data;
      this.showAlert = true;
      this.separateIp();
    })
  }

  separateIp() {
    this.ipSeparated = this.dataObjectOfApi.ipAddress!.split('.');
    console.log(this.ipSeparated);
    console.log(this.sumOfIpNumbers);
  }

  get sumOfIpNumbers() {
    let sum: number = 0;
    this.ipSeparated?.forEach(item => sum = sum + parseInt(item));
    return sum;
  }

  getComponent(componentName: string) {
    switch (componentName) {
      case 'Component1':
        return Component1Component;
      case 'Component2':
        return Component2Component;
      case 'Component3':
        return Component3Component;
      case 'Component4':
        return Component4Component;
      case 'Component5':
        return Component5Component;
      case 'Component6':
        return Component6Component;
      case 'Component7':
        return Component7Component;
      default:
        return null;
    }
  }

  getBooleanOfDisableButton() {
    this.sharedDataService.getBoolean().subscribe(value => {
      this.disableButton = !value;
    });
  }

}
