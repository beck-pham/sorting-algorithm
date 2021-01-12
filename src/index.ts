import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 4, -5, 7]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

