import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


// const numbersCollection = new NumbersCollection([10, 4, -5, 7]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characterscollection = new CharactersCollection('XaeIJQdnj');
// const sorter = new Sorter(characterscollection);
// sorter.sort();
// console.log(characterscollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(17);
linkedList.add(-2);
linkedList.add(9);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();