export class Calculatrice {
  public addition(nbr1: number,nbr2: number): number {
    return nbr1 + nbr2;
  }
  public soustraction(nbr1: number,nbr2: number): number {
    return nbr1 - nbr2;
  }

  public multiplication = (nbr1: number, nbr2: number): number => nbr1 * nbr2;

  public division(nbr1: number,nbr2: number): number {
    return nbr1 / nbr2;
  }
}
