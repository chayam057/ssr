import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  title = 'Tour of Heroes';
  constructor(public translate: TranslateService) {
    translate.addLangs(['he']);
    translate.setDefaultLang('he');
    translate.use('he');
  }
}
