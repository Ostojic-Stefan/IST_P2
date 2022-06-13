import { preduzeca } from "./data.js";
import MockRepository from "./MockRepository.js";
import Preduzece from "./Preduzece.js";
import Item from "./UI/Item.js";

const repo = MockRepository.getInstance();

repo.addListenerOnCreate((p) => {
    new Item('app', p);
});


repo.seedData(preduzeca);


// Reactivity at it's finest
setTimeout(() => {
    repo.postPreduzece(
        new Preduzece("111111111", "Test_Ime_3", "Test_Prezime_3", "3271892", "a@a.com", "TEST_KOMPANIJA_3", "Glavna_Ulica_3")
    );
}, 1000)


repo.log();