
export interface IProductoItem{
    id: number,
    imagen: string,
    nom_producto: string,
    categoria?: string,
    stock: number,
    desc?: string,
    precio: number,
    cantSelec?: number,
    color?: string,
    trastes?: string,
    marca?: string,
    mat_cuerpo?: string,
    mat_neck?: string,
    mat_fingerb?: string
}