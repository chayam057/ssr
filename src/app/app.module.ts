// import { NgModule }       from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
 import { FormsModule }    from '@angular/forms';
// import { HttpClientModule, HttpClient }    from '@angular/common/http';
// import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

// import { AppRoutingModule }     from './app-routing.module';

// import { AppComponent }         from './app.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroSearchComponent }  from './hero-search/hero-search.component';
// import { HeroService }          from './hero.service';
// import { MessageService }       from './message.service';
// import { MessagesComponent }    from './messages/messages.component';

// import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }
// @NgModule({
//   imports: [
//     BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
//     FormsModule,
//     AppRoutingModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }),
//     HttpClientInMemoryWebApiModule.forRoot(
//       InMemoryDataService, { dataEncapsulation: false }
//     )
//   ],
//   declarations: [
//     AppComponent,
//     DashboardComponent,
//     HeroesComponent,
//     HeroDetailComponent,
//     MessagesComponent,
//     HeroSearchComponent
//   ],
//   providers: [ HeroService, MessageService ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule {
//   constructor(
//     @Inject(PLATFORM_ID) private platformId: Object,
//     @Inject(APP_ID) private appId: string) {
//     const platform = isPlatformBrowser(platformId) ?
//       'in the browser' : 'on the server';
//     console.log(`Running ${platform} with appId=${appId}`);
//   }
// }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    HttpClientModule,
        FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
