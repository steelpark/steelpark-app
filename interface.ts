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

export interface Informacia {
  id: string;
  cennikOtvHod: string;
}
type Informacie = { [key: string]: Informacia };

/*export interface Cennik {
  id: string;
  arduino: string;
  dietaDo5: string;
  dietaOd5: string;
  dochodcaZtp: string;
  dospely: string;
  expozicia: string;
  expoziciaLabak: string;
  labakObjavy: string;
  ocelAuto: string;
  rodina1dieta: string;
  rodina2deti: string;
  student: string;
  workshop1hod: string;
  workshop2hod: string;
}
type Cenniky = { [key: string]: Cennik };

export interface OtvHod {
  id: string;
  pondelok: string;
  utorok: string;
  streda: string;
  stvrtok: string;
  piatok: string;
  sobota: string;
  nedela: string;
}
type OtvHodiny = { [key: string]: OtvHod };*/
