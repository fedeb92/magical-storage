import { ItemCard } from '../mocks/FakeApi'

export const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(ItemCard)
        }, 1000)
    })
}
