// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

export default function Home() {

  const [listaCarros, setCarros] = useState([
    {id: 1, nome: "Fuscão", preço: "R$: 50000,00" },
    {id: 2, nome: "Del Rey", preço: "R$: 60000,00" },
    {id: 3, nome: "Opala", preço: "R$: 70000,00" },
    {id: 4, nome: "uno com escada emcima", preço: "R$: 10000000000,00" },
    {id: 5, nome: "Brasilia Amarela", preço: "R$: 20,00" }
    ])

  return (
    <div>
        <h1>Carros do Leandro</h1> 
        
      {listaCarros.map((carro) =>
        <div key={carro.id}>
          <p>{carro.nome}</p>
          <p>{carro.preço}</p>
        </div>
      )
      }
    </div>

  );
}