// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";

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
    </div>
   
  );
}
