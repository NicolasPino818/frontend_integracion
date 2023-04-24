
interface ICarritoItemData{
    stockT: number,
    cantSelec: number,
    precio: number
}

export interface ICarritoItem{
    id: number,
    fotoSRC: string,
    tituloProd: string,
    data: ICarritoItemData
}

interface IProductoFicha{
    color: string,
    trastes: string,
    marca: string,
    matCuerpo: string,
    matNeck: string,
    matFinger: string
}

interface IProductoData{
    stockT: number,
    desc: string,
    precio: number,
    ficha: IProductoFicha
}

export interface IProductoItem{
    id: number,
    fotoSRC: string,
    tituloProd: string,
    data: IProductoData
}