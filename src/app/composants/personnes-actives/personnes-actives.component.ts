import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit {

  public lesPersonnes: string[];

  constructor(private service: MessagesService) {
    this.lesPersonnes = service.personnes;
  }

  ngOnInit(): void {
  }



}
