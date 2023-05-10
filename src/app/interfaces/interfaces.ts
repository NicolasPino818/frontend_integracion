
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
    desc?: string,
    precio: number,
    ficha?: IProductoFicha,
    cantSelec?: number,
}

export interface IProductoItem{
    id: number,
    fotoSRC: string,
    tituloProd: string,
    cat?: string,
    data: IProductoData
}