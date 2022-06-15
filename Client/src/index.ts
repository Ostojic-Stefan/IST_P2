import { preduzeca } from "./data.js";
import MockRepository from "./MockRepository.js";
import Preduzece from "./Preduzece.js";
import { ApplicationState, State} from './State.js'

// ----- SETUP ----- //

const state = new ApplicationState();

state.addListener((state: State) => {
    if (state === State.LIST)
        populateList('app', repo.allPreduzeca());
    else if (state === State.INPUT)
        populateForm('app');
});


const templateListItemElement = document.getElementById('single-item') as HTMLTemplateElement;
const templateListContainer = document.getElementById('item-list') as HTMLTemplateElement;
const templateForm = document.getElementById('form') as HTMLTemplateElement;

(document.getElementById('btn-unesi') as HTMLButtonElement)
.onclick = () => {
    state.changeState(State.INPUT);
}

(document.getElementById('btn-prikazi') as HTMLButtonElement)
.onclick = () => {
    state.changeState(State.LIST);
}

const listContainer = document
    .importNode(templateListContainer.content, true)
    .firstElementChild as HTMLDivElement;

const form = document
    .importNode(templateForm.content, true)
    .firstElementChild as HTMLFormElement;


// ----- END SETUP ----- //


const repo = MockRepository.getInstance();
repo.seedData(preduzeca);


populateList('app', repo.allPreduzeca());


repo.addListener((preduzeca: Array<Preduzece>) => {
    if (state.currentState() === State.LIST)
        populateList('app', preduzeca); 
});


function populateList(hostElementId: string, preduzeca: Array<Preduzece>) {
    listContainer.innerHTML = '';

    preduzeca.forEach(pred => {
        
        const element = document
            .importNode(templateListItemElement.content, true)
            .firstElementChild as HTMLDivElement;

        pred.populateElement(element);

        listContainer.insertAdjacentElement('beforeend', element);
        document.getElementById(hostElementId)!.innerHTML = listContainer.innerHTML;
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

setTimeout(() => {
    repo.updatePreduzece("10293845", {
        naziv: "UPDATED!"
    });
}, 1000)