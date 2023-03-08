import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { SubirArchivoComponent } from './feature/producto/components/subir-archivo/subir-archivo.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubirArchivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AlifeFileToBase64Module
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
