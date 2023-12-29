import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Imported class from the web (NG Material)
import {MatButtonModule} from '@angular/material/button';

//Imported class from the web (HTTP)
import {HttpClientModule} from '@angular/common/http';

//Services (providers)
import { ClickServiceService } from './click-service/click-service.service';
import { PopUpComponent } from './pop-up/pop-up.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [
    ClickServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
