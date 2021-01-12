import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 4, -5, 7]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterscollection = new CharactersCollection('XaeIJQdnj');
characterscollection.sort();
console.log(characterscollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(17);
linkedList.add(-2);
linkedList.add(9);
linkedList.sort();
linkedList.print();