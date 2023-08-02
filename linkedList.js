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
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }
}