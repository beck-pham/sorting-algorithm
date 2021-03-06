interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  //mark certain methods that they will eventually be implemented
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
         this.swap(j, j + 1);
        }
      }
    }
  }
}


/* BEGINNER APPROACH 
class Sorter {
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  constructor(public collection: number[] | string | LinkedList) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof LinkedList){

        }
        // Use Type Guards to shield collection which only works if it is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand;
          }
        }
        // If collection is a string, do this logic instead:
        // logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
          
        }
      }
    }
  }
}
*/
