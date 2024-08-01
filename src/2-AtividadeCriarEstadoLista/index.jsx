// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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
    </div>
   
  );
}

