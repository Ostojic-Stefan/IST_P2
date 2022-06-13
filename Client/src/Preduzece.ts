export default class Preduzece {
    constructor(
        public pib: string,
        public ime: string,
        public prezime: string,
        public telefon: string,
        public email: string,
        public naziv: string,
        public adresa: string,
    ) {}

    render(parentElement: HTMLDivElement) {
        parentElement.querySelector('.pib')!.textContent += this.pib;
        parentElement.querySelector('.name')!.textContent += `${this.ime}, ${this.prezime}`;
        parentElement.querySelector('.phone')!.textContent += this.telefon;
        parentElement.querySelector('.email')!.textContent += this.email;
        parentElement.querySelector('.companyName')!.textContent += this.naziv;
        parentElement.querySelector('.address')!.textContent += this.adresa;
    }
}