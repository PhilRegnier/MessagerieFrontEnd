import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  public somethingFromTheAPI: Observable<any>;

  constructor(private service: MessagesService) {
    this.somethingFromTheAPI = this.service.getAPI();
  }

  ngOnInit(): void {
  }

}
