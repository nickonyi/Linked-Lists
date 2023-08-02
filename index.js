import LinkedLists from "./linkedList.js";

const linkedList = new LinkedLists();

linkedList.prepend('van');
linkedList.append('house');
linkedList.append('water');
linkedList.append('dog');
linkedList.prepend('apple')
linkedList.prepend('ball')
linkedList.append('cup');

console.log(linkedList.size());
console.log(linkedList.listHead);
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(8));
linkedList.pop();
console.log(linkedList);
console.log(linkedList.contains('ball'));
console.log(linkedList.find('test4'));
linkedList.insertAt('prison', 4);
linkedList.insertAt('girl', 1);
linkedList.insertAt('spider', 2);
console.log(linkedList.toString());
linkedList.remove(5);
console.log(linkedList.toString());