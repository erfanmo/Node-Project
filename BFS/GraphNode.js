// Create Graph
const Node = class {
    constructor(listOfPills) {
        this.listOfPills = listOfPills;
    }

    getDose() {
        return this.listOfPills.reduce((acc, element) => {
            const temp = (element.amount * element.absorption) / 100;
            return temp + acc;
        }, 0);
    }
}

module.exports = Node;