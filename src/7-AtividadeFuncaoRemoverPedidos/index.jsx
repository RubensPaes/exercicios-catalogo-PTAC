// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

export default function Home() {
  const [listaCarros, setCarros] = useState([
    {id: 1, nome: "Fuscão", preço: "R$: 50000,00" },
    {id: 2, nome: "Del Rey", preço: "R$: 60000,00" },
    {id: 3, nome: "Opala", preço: "R$: 70000,00" },
    {id: 4, nome: "uno com escada emcima", preço: "R$: 10000000000,00" },
    {id: 5, nome: "Brasilia Amarela", preço: "R$: 20,00" }
    ])

 const [listaPedidos, setListaPedidos] = useState([]);
 const adicionaritemCarros = (item) => {
  setlistaCarros([...listaCarros, item])
 }



 const removerItemPedidos = (id) => {
 let remover = false
 let listaAux = listaPedidos.filter((carro) => {
 if(remover == false){
  if(carro.id !== id){
    return carro
  } else{
    remover = true;
    return null
  }
 } else{
  return carro
 }


 })

 setListaPedidos(listaAux)
}



  return (
    <div>
         <h1>Carros do Leandro</h1>  
         {listaCarros.map((carro) =>
        <div key={carro.id}>
          <p>{carro.nome}</p>
          <p>{carro.preço}</p>
          <button onClick={() => adicionarItemCarros(carro)}>Selecionar</button>
        </div>
      )
      }
      {
        listaPedidos.map((carro) =>
          <div key={carro.id}>
        <p>{carro.nome}</p>
        <p>{carro.preço}</p>
        </div>
      )
      }
    </div>
   
  );
}