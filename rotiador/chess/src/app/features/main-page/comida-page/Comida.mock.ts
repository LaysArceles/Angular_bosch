export interface Festfood{
    id: string,
    name: string,
    description: string,
    image:string
    price: number
}

export const menu:Festfood[]=[
    {
        id: "123456",
        name: "big buger",
        description: "dois pão com gergelim,anéis de cebola,banco,dua carnes, queijo chedder, alface, tomate, cebola, picles, ketchup e maionese. Acompanhado de batatas fritas com sal e empanados.",
        price:32.90,
        image: "https://i.ytimg.com/vi/W-NiD3x1mnU/maxresdefault.jpg"
    },
     {
        id: "654321",
        name: "Pizza de queijo",
        description: "Pizza de queijo com massa crocante, molho de tomate e bastante queijo derretido por cima, dourado e puxando a cada fatia.",
        price:22.40,
        image: "https://superpizzapan.com.br/wp-content/uploads/2025/10/a-vida-e-massa.jpg"
    },
     {
        id: "123456",
        name: "Sushi",
        description: " 5 Nigiri, 5 Sashimi , 5 Uramaki, 5 Hosomaki, 5 Futomaki, 5 Temaki, 5 Hossomaki de salmão.",
        price:50.90,
        image: "https://t4.ftcdn.net/jpg/01/40/22/91/360_F_140229175_GLtXWJfCCo3f2BH469WpYaHGPXX3t54z.jpg"
    },
    {
    id: "123457",
    name: "Macarrão",
    description: "Macarrão ao molho de tomate, Parmediana, queijo ralado, alho, cebola e temperos.",
    price: 35.90,
    image: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/03/17105219/File-a-parmegiana.jpg"
},
{
    id: "123458",
    name: "Açaí",
    description: "Açaí cremoso com banana, granola, leite condensado e calda de chocolate.",
    price: 25.90,
    image: "https://abf.com.br/wp-content/uploads/2023/02/700x400.png"
}
]
