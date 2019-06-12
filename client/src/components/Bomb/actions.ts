export function explodeBomb(id) {

    return {
        type: 'EXPLODE_BOMB',
        id
    }
}
export function removeBomb(id) {

    return {
        type: 'REMOVE_BOMB',
        id
    }
}