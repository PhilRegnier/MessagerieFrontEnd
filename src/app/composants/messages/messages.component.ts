import { Component, OnInit } from '@angular/core';
import {Message} from "../../modeles/Message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    public lesMessages: Message[];

  constructor(private service: MessagesService) {

    this.lesMessages = service.messages;
  }

  ngOnInit(): void {
  }

}
