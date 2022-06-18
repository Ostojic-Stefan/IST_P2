export interface IPreduzece {
    pib: string,
    ime: string,
    prezime: string,
    telefon: string,
    email: string,
    naziv: string,
    adresa: string
}

export class Preduzece {
    constructor(
        public pib: string,
        public ime: string,
        public prezime: string,
        public telefon: string,
        public email: string,
        public naziv: string,
        public adresa: string
    ) {}

    public populateElement<T extends HTMLElement>(parentElement: T) {
        parentElement.querySelector('.pib')!.textContent          += this.pib;
        parentElement.querySelector('.name')!.textContent         += `${this.ime}, ${this.prezime}`;
        parentElement.querySelector('.phone')!.textContent        += this.telefon;
        parentElement.querySelector('.email')!.textContent        += this.email;
        parentElement.querySelector('.companyName')!.textContent  += this.naziv;
        parentElement.querySelector('.address')!.textContent      += this.adresa;
    }

    public update(partial: Partial<Preduzece>): void {
        this.ime      =  partial.ime     ||  this.ime;
        this.prezime  =  partial.prezime ||  this.prezime;
        this.telefon  =  partial.telefon ||  this.telefon;
        this.email    =  partial.email   ||  this.email;
        this.naziv    =  partial.naziv   ||  this.naziv;
        this.adresa   =  partial.adresa  ||  this.adresa;
    }

    static ConstructPreduzece(p: IPreduzece): Preduzece {
        return new Preduzece(p.pib, p.ime, p.prezime, p.telefon, p.email, p.naziv, p.adresa);
    }

    static ConstructPreduzeceArray(p: IPreduzece[]): Array<Preduzece> {
        return p.map(pred => this.ConstructPreduzece(pred));
    }

}