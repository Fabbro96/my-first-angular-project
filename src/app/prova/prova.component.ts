import { FirebaseService } from '../firebase.service';
import { AsyncAwaitService } from '../async-await-serice/async-await.service';

import { ClickServiceService } from './../click-service/click-service.service';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit{

  asyncawait: AsyncAwaitService;

  /** Proprietá del bottone */
  isDisabled = [false, false];

  testoLabel = 'Schiaccia un bottone';

  /** Array dei bottoni */
  protected numeroBottone = [{id: 1, nome: 'Bottone 1'}, {id: 2, nome: 'Bottone 2'}];


  constructor(asyncawait: AsyncAwaitService) {
    this.asyncawait = asyncawait;
  }


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

  /**
  * Costruttore per firebase
  */
  //constructor(private firebase:FirebaseService) {}
  /* onFirebaseClick() {
    this.firebase.insertPerson('https://angular-project-52f56-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
    {nome: 'Mario', cognome: 'Rossi', eta: 30}).subscribe((data) => {console.log(data)})
  } */


  async onAlternativeClick() {
    let async = new AsyncAwaitService();
    // Usato con il promises
    // asyncAwait.displayData();
    // Usato con async/await

    /** In questo caso stamperá nei log i dati usando l'await */
    console.log(this.asyncawait.getData());
  }
}
