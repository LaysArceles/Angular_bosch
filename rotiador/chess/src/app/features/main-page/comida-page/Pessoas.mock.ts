export interface IPessoa{
    name:string,
    email:string,
    document?:string,
    telefone?:string
}
const MockPesoas:IPessoa[]=[
    {
        email:"LaysArceles@gmail.com",
        name: "Lays Arceles",
        document:"123123123",
    },
      {
        email:"Brubru@gmail.com",
        name: "Bruna bonk",
        document:"3232321321",

    },
    {
        email:"ketcat@gmail.com",
        name: "Ketlyn Jomes",
        document:"231231231",

    }

] 
export default MockPesoas