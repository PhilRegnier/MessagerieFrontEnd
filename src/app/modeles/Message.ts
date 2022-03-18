export class Message {

  private _auteur: string;
  private _texte: string;
  private _date: Date;

  constructor(auteur: string, texte: string) {
    this._auteur = auteur;
    this._texte = texte;
    this._date = new Date();
  }

  get auteur(): string {
    return this._auteur;
  }

  set auteur(value: string) {
    this._auteur = value;
  }

  get texte(): string {
    return this._texte;
  }

  set texte(value: string) {
    this._texte = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
