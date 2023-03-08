import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '@producto/shared/service/subir-archivo.service';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  constructor(protected subirArchivoService: SubirArchivoService){}

  ngOnInit(): void {
    
  }

  onFileChanged(event) {
    event.forEach(archivo => {
      this.subirArchivoService.subir(archivo);
    });
    
  }
}
