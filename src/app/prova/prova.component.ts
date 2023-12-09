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

  removeBlur():void {
    const blurryBackground = document.getElementById("blurred") as HTMLElement;
    const rimuoviBlur = document.getElementById("blurToEliminate") as HTMLElement;
    // Rimuovi le proprietà di sfocatura e filtri
    blurryBackground.style.filter = "none";
    blurryBackground.style.backdropFilter = "none";

    // Rendi il blurry-background trasparente ai clic
    (document.querySelector(".blurry-background") as HTMLElement).style.pointerEvents = "all";

    rimuoviBlur.style.visibility = "hidden";

  }

  next():void {
    console.log("next")
    const bottone1 = document.getElementById("bottone1") as HTMLElement;
    
  }




  /**
  * Costruttore per firebase
  */
  //constructor(private firebase:FirebaseService) {}
  /* onFirebaseClick() {
    this.firebase.insertPerson('https://angular-project-52f56-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
    {nome: 'Mario', cognome: 'Rossi', eta: 30}).subscribe((data) => {console.log(data)})
  } */


}
