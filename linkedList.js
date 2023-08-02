import Node from "./node.js";

export default class LinkedLists {
    constructor() {
        this.listHead = null;
    }

    prepend(value) {
        let tmp = null;

        if (this.listHead != null) {
            tmp = this.listHead;
        }
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    append(value) {
        //check if the list is empty
        if (this.listHead == null) {
            //if the list is empty call the prepend function and add the first node with the given value
            this.prepend(value);
        } else {
            //if the list is not empty traverse the list to find the last node
            let tmp = this.listHead;

            while (tmp.nextNode != null) {
                //move to the next node until the last node is reached
                tmp = tmp.nextNode;
            }
            //create a new node with the current value and make it the next node of the current node
            tmp.nextNode = new Node(value);
        }
    }

    size() {
        let tmp = this.listHead;
        let counter = 0;

        while (tmp != null) {
            counter++;
            tmp = tmp.nextNode;
        }
        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if (tmp == null) {
                return "No node at that index";
            }
        }

        return tmp;
    }
    pop() {
        let curr = this.listHead;
        let prev = null;

        while (curr.nextNode != null) {
            prev = curr;
            curr = curr.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
            if (tmp.value == value) {
                return index;
            }
            tmp = tmp.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let stringLetter = "";
        while (tmp != null) {
            stringLetter += `${tmp.value} -> `;
            tmp = tmp.nextNode;
        }
        return stringLetter + "null";
    }

    insertAt(value, index) {
        if (this.listHead == null) {
            this.prepend(value);
        } else {

            let curr = this.listHead;
            let prev = null;

            for (let i = 0; i < index; i++) {
                prev = curr;
                curr = curr.nextNode;

                if (curr == null) {
                    return 'No nodes at that index';
                }
            }
            let tmp = new Node(value);
            prev.nextNode = tmp;
            tmp.nextNode = curr;
        }
    }

    remove(index) {
        let curr = this.listHead;
        let prev = null;

        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.nextNode;
            if (curr == null) {
                return 'No nodes at that index';
            }
        }
        prev.nextNode = curr.nextNode;
    }
}