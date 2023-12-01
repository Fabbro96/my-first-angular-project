import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Imported class from the web (NG Material)
import {MatButtonModule} from '@angular/material/button';

//Imported class from the web (HTTP)
import {HttpClientModule} from '@angular/common/http';

//Services (providers)
import { AsyncAwaitService } from './async-await-serice/async-await.service';
import { ClickServiceService } from './click-service/click-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,

  ],
  providers: [
    ClickServiceService,
    AsyncAwaitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
