import { Component, OnInit } from '@angular/core';
import { DialogoService } from '@producto/shared/service/dialogo.service';
import { ArchivoService } from '@producto/shared/service/archivo.service';
import { Categoria } from '@producto/shared/model/categoria';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
  public listaCategoria: Categoria[];

  constructor(protected archivoService: ArchivoService, 
    protected dialogo: DialogoService){}


  ngOnInit(): void {
    this.archivoService.getCategoria()
    .subscribe(data => {
      console.log(data)
      this.listaCategoria = data;
    });
    
  }

  cargarCategoria() {

    
  }

  onFileChanged(event) {
    event.forEach(archivo => {
      this.archivoService.subir(archivo)
      .subscribe(() => {
        this.dialogo.mostrarMensajeExitoDialog('Se guardo correctamente.')
      });
    });
    //this.dialogo.mostrarMensajeErrorDialog('Falta elegir ');
  }
}
