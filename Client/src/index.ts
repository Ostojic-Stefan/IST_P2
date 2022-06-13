import { preduzeca } from "./data.js";
import MockRepository from "./MockRepository.js";

const repo = new MockRepository(preduzeca);

console.log(repo.allPreduzeca());