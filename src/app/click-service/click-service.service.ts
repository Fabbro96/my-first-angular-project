import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickServiceService {
  nomeBottone: string = "";


  constructor() {}
  public getNomeBottone(nomeBottone: string) {
    return "Hai schiacciato il bottone: " + nomeBottone;
  }

  public getDimensioni(element: ElementRef) {
    // Ottieni le dimensioni e la posizione dell'elemento di riferimento
    const rect = element.nativeElement.getBoundingClientRect();

    // Calcola la posizione per il nuovo bottone (ad esempio, posizionato a destra)
    const nuovaPosizioneX = rect.x + rect.width;
    const nuovaPosizioneY = rect.y;
    console.log("Nuova posizione X: " + nuovaPosizioneX+ " Nuova posizione Y: " + nuovaPosizioneY);

  }
}
