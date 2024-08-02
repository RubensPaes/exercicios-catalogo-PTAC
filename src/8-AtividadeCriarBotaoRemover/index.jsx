// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import { useState } from "react";

export default function Meio() {
  const [listaCarros, setCarros] = useState([
    {id: 1, nome: "Fuscão", preço: "R$: 50000,00" },
    {id: 2, nome: "Del Rey", preço: "R$: 60000,00" },
    {id: 3, nome: "Opala", preço: "R$: 70000,00" },
    {id: 4, nome: "uno com escada emcima", preço: "R$: 10000000000,00" },
    {id: 5, nome: "Brasilia Amarela", preço: "R$: 20,00" }
    ])

 const [listaPedidos, setListaPedidos] = useState([]);
 const adicionaritemCarros = (item) => {
 setListaPedidos([...listaPedidos, item])
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
          <button onClick={() => adicionaritemCarros(carro)}>Selecionar</button>
        </div>
      )
      }
      {
        listaPedidos.map((carro) =>
          <div key={carro.id}>
        <p>{carro.nome}</p>
        <p>{carro.preço}</p>
        <button onClick={() => removerItemPedidos(carro.id)}>Remover</button>
        </div>
      )
      }
    </div>
   
  );
}