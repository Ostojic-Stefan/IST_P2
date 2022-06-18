import PreduzeceRepository from "./PreduzeceRepository";
import { Preduzece } from "./Preduzece";
import { ApplicationState, State} from './State'


// ----- SETUP ----- //

const state = new ApplicationState();

state.addListener((state: State) => {
    if (state === State.LIST)
        populateList('app', repo.getState());
    else if (state === State.INPUT)
        populateForm('app');
});


const templateListItemElement = document.getElementById('single-item') as HTMLTemplateElement;
const templateListContainer = document.getElementById('item-list') as HTMLTemplateElement;
const templateForm = document.getElementById('form') as HTMLTemplateElement;
const templateSingleItemIzmeni = document.getElementById('single-item-izmeni') as HTMLTemplateElement;

const pibPretraga = document.getElementById('unos-pib') as HTMLInputElement;
const nazivPretraga = document.getElementById('unos-naziv') as HTMLInputElement;
const tekstPretrage = document.getElementById('tekstPretrage') as HTMLInputElement;

const fakturaPretraga = document.getElementById('fakturaPretraga') as HTMLInputElement;


(document.getElementById('btn-pretrazi') as HTMLButtonElement)
.onclick = () => {
    if (!pibPretraga.checked && !nazivPretraga.checked) 
        return alert("Jedna opcija mora da bude selektovana");
        
    if (pibPretraga.checked) {
        repo.filter('pib', tekstPretrage.value)
    } else if (nazivPretraga.checked) {
        repo.filter('naziv', tekstPretrage.value)
    }

    tekstPretrage.value = '';
}

(document.getElementById('btn-fakturaPretraga') as HTMLButtonElement)
.onclick = () => {
    const pib = fakturaPretraga.value;
    populateFaktureZaPreduzece('app', pib);
}

(document.getElementById('btn-unesi') as HTMLButtonElement)
.onclick = () => {
    state.changeState(State.INPUT);
}

(document.getElementById('btn-prikazi') as HTMLButtonElement)
.onclick = () => {
    repo.resetState();
    state.changeState(State.LIST);
}

const listContainer = document
    .importNode(templateListContainer.content, true)
    .firstElementChild as HTMLDivElement;


const form = document
    .importNode(templateForm.content, true)
    .firstElementChild as HTMLFormElement;

const izmenaPreduzeca = document
    .importNode(templateSingleItemIzmeni.content, true)
    .firstElementChild as HTMLFormElement;


// ----- END SETUP ----- //


const repo = PreduzeceRepository.getInstance();


repo.addListener((preduzeca: Array<Preduzece>) => {
    if (state.currentState() === State.LIST)
        populateList('app', preduzeca); 
});


function populateList(hostElementId: string, preduzeca: Array<Preduzece>) {

    if (preduzeca.length <= 0) {
        document.getElementById(hostElementId)!.innerHTML = '';
        return;
    }

    listContainer.innerHTML = '';

    preduzeca.forEach(pred => {
        
        const element = document
            .importNode(templateListItemElement.content, true)
            .firstElementChild as HTMLDivElement;

        pred.populateElement(element);

        listContainer.insertAdjacentElement('beforeend', element);

        document.getElementById(hostElementId)!.innerHTML = listContainer.innerHTML;
    });

    (document.querySelectorAll('.single-item') as NodeListOf<HTMLDivElement>).forEach(el => {
        el.addEventListener('click', (e: any) => {
            const parent = e.target.parentElement;
            const pib = parent.querySelector('.pib').textContent.split(' ')[1];
    
            populateSinglePreduzece('app', repo.getPreduzeceByPib(pib));
        });
    });

}

async function populateFaktureZaPreduzece(hostElementId: string, pib: string) {
    document.getElementById(hostElementId)!.innerHTML = pib;

}

function populateSinglePreduzece(hostElementId: string, preduzece: Preduzece) {
    document.getElementById(hostElementId)!.innerHTML = izmenaPreduzeca.outerHTML;

    const localForm = document.querySelector('form') as HTMLFormElement;
    localForm.querySelector('.ime')
    console.log(localForm);
    
    (localForm.querySelector('#ime') as HTMLInputElement).value = preduzece.ime;
    (localForm.querySelector('#prezime') as HTMLInputElement).value = preduzece.prezime;
    (localForm.querySelector('#telefon') as HTMLInputElement).value = preduzece.telefon;
    (localForm.querySelector('#email') as HTMLInputElement).value = preduzece.email;
    (localForm.querySelector('#naziv') as HTMLInputElement).value = preduzece.naziv;
    (localForm.querySelector('#adresa') as HTMLInputElement).value = preduzece.adresa

    localForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const newPreduzece = new Preduzece(
            "1829340598",
            (localForm.querySelector('#ime') as HTMLInputElement).value,
            (localForm.querySelector('#prezime') as HTMLInputElement).value,
            (localForm.querySelector('#telefon') as HTMLInputElement).value,
            (localForm.querySelector('#email') as HTMLInputElement).value,
            (localForm.querySelector('#naziv') as HTMLInputElement).value,
            (localForm.querySelector('#adresa') as HTMLInputElement).value
        );

        // repo.postPreduzece(preduzece);
        repo.updateData(preduzece.pib, newPreduzece);

        state.changeState(State.LIST);

    });
}

function populateForm(hostElementId: string) {
    document.getElementById(hostElementId)!.innerHTML = form.outerHTML;

    const localForm = document.querySelector('form') as HTMLFormElement;

    localForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const preduzece = new Preduzece(
            "1829340598",
            (localForm.querySelector('#ime') as HTMLInputElement).value,
            (localForm.querySelector('#prezime') as HTMLInputElement).value,
            (localForm.querySelector('#telefon') as HTMLInputElement).value,
            (localForm.querySelector('#email') as HTMLInputElement).value,
            (localForm.querySelector('#naziv') as HTMLInputElement).value,
            (localForm.querySelector('#adresa') as HTMLInputElement).value
        );

        repo.postPreduzece(preduzece);

        state.changeState(State.LIST);

    });
}