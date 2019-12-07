interface Exponat {
  id: string;
  nazov: string;
  popis: string;
  oblast: string;
  poschodie: string;
  ovladanie: string;
  obrazok: string;
}
type Exponaty = { [key: string]: Exponat };
