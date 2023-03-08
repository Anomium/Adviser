import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Archivo } from '../model/archivo';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor(protected http: HttpService){}

  public subir(archivo: Archivo) {
    console.log(`${environment.endpoint}/subir`);
    return this.http.doPost<Archivo, boolean>(`${environment.endpoint}/subir`, archivo);
  }

}
