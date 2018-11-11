import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'Tour of Heroes';
constructor(public translate: TranslateService, @Inject(PLATFORM_ID) private platformId: Object) {
translate.addLangs(['he']);
translate.setDefaultLang('he');
translate.use('he');
}
ngOnInit() {
if (this.platformId === 'browser') {
sessionStorage.setItem('mykey', 'sessionStorage working');
}
}
}