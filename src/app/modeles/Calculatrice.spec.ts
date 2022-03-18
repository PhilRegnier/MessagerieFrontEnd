import {Calculatrice} from "./Calculatrice";

fdescribe(
  'Calculatrice',
  () => {
    it(
      'retourner le bon résultats de l\'addition',
      () => {
        let calculatrice = new Calculatrice();
        let resultat = calculatrice.addition(30,12);
        expect(resultat).toEqual(42);
      }
    );
    it(
      'retourner le bon résultats de la soustraction',
      () => {
        let calculatrice = new Calculatrice();
        let resultat = calculatrice.soustraction(58,16);
        expect(resultat).toEqual(42);
      }
    );
    it(
      'retourner le bon résultats de la multiplication',
      () => {
        let calculatrice = new Calculatrice();
        let resultat = calculatrice.multiplication(6,7);
        expect(resultat).toEqual(42);
      }
    );
    it(
      'retourner le bon résultats de la division',
      () => {
        let calculatrice = new Calculatrice();
        let resultat = calculatrice.division(84,2);
        expect(resultat).toEqual(42);
      }
    );
  }

)
