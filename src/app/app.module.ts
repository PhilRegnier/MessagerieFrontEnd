import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './composants/titre/titre.component';
import { PersonnesActivesComponent } from './composants/personnes-actives/personnes-actives.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import { MessagesComponent } from './composants/messages/messages.component';
import { MessageComponent } from './composants/message/message.component';
import { FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'abc', component: TitreComponent},
  {path:'xyz', component: PersonnesActivesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    PersonnesActivesComponent,
    NouveauMessageComponent,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
