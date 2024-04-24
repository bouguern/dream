import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormObject } from 'src/app/models/form-object';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  formObject: FormObject = { intention: '', nomEtPrenom: '' };

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {

  }

  onFormChange() {
    // Check if the form is valid
    if (this.myForm && this.myForm.valid) {
      if (this.formObject.nomEtPrenom != '' && this.formObject.intention != '')
        this.sharedDataService.setBoolean(true); //console.log('Form is valid');
      else
        this.sharedDataService.setBoolean(false); //console.log('Form is invalid');
    } else {
      // Form is invalid
      this.sharedDataService.setBoolean(false); //console.log('Form is invalid');
    }
  }

}
