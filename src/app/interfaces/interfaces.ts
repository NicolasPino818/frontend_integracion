
interface ICarritoItemData{
    cantSelec: number,
    precio: number
}

export interface ICarritoItem{
    id: number,
    fotoSRC: string,
    tituloProd: string,
    data: ICarritoItemData
}