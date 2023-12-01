import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Injectable() export class AsyncAwaitService {

  //Utilizzo con le promises
  /*constructor() { }

  fetchData(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Dati recuperati con successo!');
      }, 2000);
    });
  }

  displayData(){
    this.fetchData()
    .then(data => console.log(data));
  } */

  constructor (private http: HttpClient) {}

  async getData() {
    try{
      return await lastValueFrom(
        this.http.get('https://jsonplaceholder.typicode.com/users')
        );
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
