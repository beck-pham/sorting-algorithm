"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 4, -5, 7]);
numbersCollection.sort();
console.log(numbersCollection.data);
var characterscollection = new CharactersCollection_1.CharactersCollection('XaeIJQdnj');
characterscollection.sort();
console.log(characterscollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(17);
linkedList.add(-2);
linkedList.add(9);
linkedList.sort();
linkedList.print();
