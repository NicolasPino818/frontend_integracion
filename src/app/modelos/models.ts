import { IProductoItem } from "../interfaces/interfaces"

export const producto: IProductoItem[] = [

    {
        id: 1,
        fotoSRC: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw9539532e/images/imagenes-productos/800/MKTX/MKTXPRKXN1-001.jpg?sw=1480&sh=2000&sm=fit',
        tituloProd: 'LES PAUL STANDARD 50s GUITARRA ELECTRICA LEMON BURST EPIPHONE',
        cat: 'guitarras',
        data:
            {
                stockT: 25,
                desc: '¡La nueva colección Inspired by Gibson™ de Epiphone presenta con orgullo la Les Paul™ Standard 50s! Esta guitarra recrea con amor la sensación y el tono de Les Paul de la década de 1950. La larga amistad de Epiphone con el Sr. Les Paul comenzó en 1940 cuando Les construyó una de las primeras guitarras eléctricas de cuerpo sólido del mundo mientras trabajaba de noche en la fábrica original de Epiphone en Manhattan. La primera guitarra de cuerpo sólido de Les, apodada “The Log” (El leño), acabó inspirando a la Les Paul Standard, la que muchos consideran la mejor guitarra eléctrica jamás hecha. La guitarra está hecha con un cuerpo de caoba, tapa de arce (chapa de madera AAA en la parte superior), mástil de caoba con forma de los años 50 con long tenon, diapasón de laurel de la India con inlays trapezoidales clásicas, nuevos afinadores Vintage Deluxe de Epiphone, un par de Epiphone humbuckers™ ProBucker™ aclamado por la crítica y perillas Top Hat doradas con indicadores.',
                precio: 550000,
                ficha: {
                    color: 'Natural (NAT)',
                    trastes: '19',
                    marca: 'Epiphone',
                    matCuerpo: 'Caoba (fondo y lados)',
                    matNeck: 'Spruce',
                    matFinger: 'Laurel'
                }
            }
    },
    {
        id: 2,
        fotoSRC: 'https://www.solar-guitars.com/wp-content/uploads/2019/04/A2.6C-FRONT-HORIZONTAL.png.webp',
        tituloProd: 'GUITARRA SOLAR A2.6 - CARBON BLACK MATTE',
        cat: 'guitarras',
        data:
            {
                stockT: 8,
                desc: 'Esta guitarra de seis cuerdas Tipo A2.6 cuenta con un aspecto sigiloso, una pala recortada distintiva y un conjunto de características notables, lo que la convierte en un instrumento profesional y preciso, adecuado tanto para el trabajo en el escenario como en el estudio. Viene cargado con un confiable puente rígido de cuerdas a través del cuerpo y un conjunto de pastillas Duncan Solar que brindan un espectro completo de opciones tonales, desde limpio orgánico hasta fuertemente saturado, todo con sostenido fluido y máxima claridad. El Type A2.6 presenta un diseño de unión de cuerpo/cuello pasante con escala de 25.5”, un cuerpo de caoba, un mástil de arce rápido, delgado y cómodo y un diapasón de ébano con 24 trastes super-jumbo. Incluye sintonizadores Solar 18: 1, tuerca PPS, hardware negro mate, interruptor de pastilla de hoja de cinco vías y cuello de acceso completo. Disponible en acabado mate negro carbón.',
                precio: 750000,
                ficha: {
                    color: 'CARBON MATTE (C)',
                    trastes: '24 SUPER JUMBO',
                    marca: 'SOLAR',
                    matCuerpo: 'MAHOGANY',
                    matNeck: 'MAPLE',
                    matFinger: 'EBONY'
                }
            }
    },
    {
        id: 3,
        fotoSRC: 'https://audiomusicacl.vtexassets.com/arquivos/ids/169406-800-auto?v=637801434873000000&width=800&height=auto&aspect=true',
        tituloProd: 'Guitarra eléctrica LTD TE200 RW Telecaster - Tobacco Sunburst',
        cat: 'guitarras',
        data:
            {
                stockT: 8,
                desc: 'Cuando ESP se fundó en 1975, su fama original era tomar guitarras existentes y mejorarlas, con cuellos modificados y componentes que aumentaban su jugabilidad y calidad sónica. Hoy, ESP aún se enorgullece de ofrecer formas de guitarra clásicas que se sienten y suenan mejor de lo que cabría esperar, especialmente a los precios asequibles en la serie LTD. Disponible en varios acabados, la TE-200 es una excelente guitarra para rock, rock clásico, country, blues y más. Cuenta con un cuerpo de caoba y un mástil de arce en forma de U rápido y delgado con diapasón de arce de 24 trastes. Las cápsulas ESP LH-150N en cuello y ESP LH-150B en puente la convierten en una excelente guitarra para todos los conciertos.',
                precio: 549000,
                ficha: {
                    color: 'Tobacco sunburst',
                    trastes: '24 XJ',
                    marca: 'Ltd',
                    matCuerpo: 'Caoba',
                    matNeck: 'Arce de 3 piezas',
                    matFinger: 'Palorosa'
                }
            }
    },
    {
        id: 4,
        fotoSRC: 'https://audiomusicacl.vtexassets.com/arquivos/ids/177182-800-auto?v=637859849844200000&width=800&height=auto&aspect=true',
        tituloProd: 'Guitarra eléctrica Ibanez GRX40 - Candy Apple',
        cat: 'guitarras',
        data:
            {
                stockT: 13,
                desc: 'La GRX40 es una guitarra eléctrica de cuerpo sólido de la serie RX y parte de la línea GIO de nivel inicial. Con uno de los diseños más populares en la historia de Ibanez, la GRX40 fué diseñada para músicos que buscan una configuración HSS. La GRX40 es cómoda, liviana y con uno de los diseños más versátiles de Ibanez, además es de las primeras en ofrecer una cápusla humbucker (puente) y 2 simples (mástil y centro). Si necesitas cubrir un amplio rango de estilos y sonidos con sólo una guitarra, ésta es la guitarra',
                precio: 179900,
                ficha: {
                    color: 'Candy Apple (CA)',
                    trastes: '22 Medium',
                    marca: 'Ibanez',
                    matCuerpo: 'Alamo',
                    matNeck: 'Arce',
                    matFinger: 'Jatoba'
                }
            }
    },

]


export const tiendas = [
    {
      nom_sede: 'Sede Providencia',
      comuna: 'providencia',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            culpa reiciendis, odit omnis vero aspernatur dicta modi repellendus
            dolore, explicabo rerum repudiandae ut doloremque incidunt.`
    },
    {
      nom_sede: 'Sede Maipu',
      comuna: 'Maipu',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            culpa reiciendis, odit omnis vero aspernatur dicta modi repellendus
            dolore, explicabo rerum repudiandae ut doloremque incidunt.`
    },
    {
      nom_sede: 'Sede Santiago',
      comuna: 'Santiago',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            culpa reiciendis, odit omnis vero aspernatur dicta modi repellendus
            dolore, explicabo rerum repudiandae ut doloremque incidunt.`
    },
    {
      nom_sede: 'Sede Vitacura',
      comuna: 'Vitacura',
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            culpa reiciendis, odit omnis vero aspernatur dicta modi repellendus
            dolore, explicabo rerum repudiandae ut doloremque incidunt.`
    }
  ]