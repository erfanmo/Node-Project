//BSF data structure
const inventory = require('../db/inventory.json');
const Node = require('./GraphNode.js');
const checkGoal = require('./checkGoal');

module.exports = (typeOfpill, dnd) => {

    const nodesQueue = [];
    const children = inventory[typeOfpill];

    let childrenNodes = children.map((element) => {
        return new Node([element])
    }).reverse();

    nodesQueue.push(...childrenNodes);

    bfs = () => {
        console.log('current queue for' + ' ' + typeOfpill + ' ' + nodesQueue.length);
        const current = nodesQueue.shift();

        // check if the current node is the target
        if (checkGoal(current, dnd).result) {
            return current;
        }

        const children = inventory[typeOfpill];

        const childrenNodes = children.map((element) => {
            return new Node([...(current.listOfPills), element])
        }).reverse();

        nodesQueue.push(...childrenNodes);

        return bfs();
    }

    return bfs();
}