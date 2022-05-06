// this module check bollow constraint :
//  range of DND +20% / -30% 
//  close as possible to the DND
const checkGoal = (node, dnd) => {
    const twentyBearer = dnd + ((20 * dnd) / 100);
    const thirtyBearer = dnd - ((30 * dnd) / 100);
    const dose = node.getDose();

    if (node.getDose() >= thirtyBearer && node.getDose() <= twentyBearer) {
        return {
            result: true
        }
    }

    if (node.getDose() < thirtyBearer)
        return {
            result: false,
            code: 0
        }

    if (node.getDose() > twentyBearer)
        return {
            result: false,
            code: 1
        }
}

module.exports = checkGoal;