import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../modeles/Message";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
  }

  public submitForm(valeurDuFormulaire: any): void {
    let nouveauMessage = new Message( valeurDuFormulaire.pseudo, valeurDuFormulaire.message)
    this.service.ajouterMessage(nouveauMessage);
    valeurDuFormulaire.pseudo = '';
    valeurDuFormulaire.message = '';
  }

}
