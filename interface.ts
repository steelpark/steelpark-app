export interface Exponat {
  id: string;
  nazov: string;
  popis: string;
  oblast: string;
  poschodie: string;
  ovladanie: string;
  obrazok: string;
}
type Exponaty = { [key: string]: Exponat };

export interface Cesta {
  id: string;
  druhe: string;
  prizemie: string;
  prve: string;
}
type Cesty = { [key: string]: Cesta };
