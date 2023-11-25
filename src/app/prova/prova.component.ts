import { ClickServiceService } from './../click-service/click-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{
  /** Proprietá del bottone */
  isDisabled = [false, false];

  testoLabel = 'Schiaccia un bottone';

  /** Array dei bottoni */
  protected numeroBottone = [{id: 1, nome: 'Bottone 1'}, {id: 2, nome: 'Bottone 2'}];

  /**
  * Costruttore
  */
  constructor() {}

  ngOnInit(): void {
    /** Cambia lo stato del bottone cliccato */
    /* setInterval (() => {
      this.isDisabled = !this.isDisabled;
    }, 2000); */

  }

  onClick(e:any) {
    const clickService = new ClickServiceService();
    this.testoLabel = clickService.getNomeBottone(e);

    for (let i = 0; i < this.isDisabled.length; i++) {
      if (i == e-1) {
        this.isDisabled[i] = true;
        console.log("Bottone "+i+" disabilitato");
      }
      else
      {
        this.isDisabled[i] = false;
        console.log("Bottone "+i+" abilitato");
      }
    }

  }
}
