import { Injectable } from '@angular/core';
import {Message} from "../modeles/Message";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages: Message[];
  public personnes: string[];

  constructor(private http: HttpClient) {

    this.messages = [ new Message('Paul','Yo!'),
                      new Message('Jean', 'Whasaaa!?'),
                      new Message('Paul', 'WHASAAAA!!!')];

    this.personnes = [ 'Paul', 'Jean'];
  }

  public ajouterMessage(message: Message): void {
    this.messages.push(message);
    if (this.personnes.indexOf(message.auteur) == -1) {
      this.personnes.push(message.auteur);
    }
  }

  public getAPI(): Observable<any> {
    return this.http.get('http://api.kanye.rest');
  }

}
