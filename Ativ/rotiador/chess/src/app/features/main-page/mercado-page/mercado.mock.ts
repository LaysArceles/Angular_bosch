export interface Imarket {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number
}

const MockMarket: Imarket[] = [
    {
        id: "m001",
        name: "Arroz 5kg",
        description: "Arroz branco tipo 1, pacote de 5kg, ideal para o dia a dia.",
        price: 28.90,
        image: "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/arroz-branco-tio-urbano.jpg"
    },
    {
        id: "m002",
        name: "Feijão Carioca 1kg",
        description: "Feijão carioca selecionado, rico em proteínas e sabor.",
        price: 8.50,
        image: "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/mkp-feijao-carioca-1kg-removebg-preview.png"
    },
    {
        id: "m003",
        name: "Leite Integral 1L",
        description: "Leite integral longa vida, rico em cálcio e vitaminas.",
        price: 4.99,
        image: "https://zaffari.vtexassets.com/arquivos/ids/262090-800-450?v=638659085279870000&width=800&height=450&aspect=true"
    },
    {
        id: "m004",
        name: "Pão de Forma",
        description: "Pão de forma macio, ideal para café da manhã e lanches.",
        price: 7.90,
        image: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/P%C3%A3o-de-Forma-Tradicional-Visconti-400g.png"
    },
    {
        id: "m005",
        name: "Óleo de Soja 900ml",
        description: "Óleo de soja refinado, perfeito para frituras e preparo de alimentos.",
        price: 6.70,
        image: "https://mercantilnovaera.vtexassets.com/arquivos/ids/214695-800-450?v=638447417992900000&width=800&height=450&aspect=true"
    }
];

export default MockMarket;