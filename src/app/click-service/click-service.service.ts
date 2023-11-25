import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable() export class ClickServiceService {
  nomeBottone: string = "";
  constructor() { }
  public getNomeBottone(nomeBottone: string) {
    return "Hai schiacciato il bottone: "+nomeBottone;
  }
}
