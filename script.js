let produtos = [

{nome:"Chocolate Kinder",preco:15,estoque:10},

{nome:"Bala Fini",preco:5,estoque:30},

{nome:"Kit Doces",preco:25,estoque:8},

{nome:"Pirulito",preco:2,estoque:50}

]

let carrinho = []

function carregarProdutos(){

let area = document.getElementById("produtos")

area.innerHTML=""

produtos.forEach((p,i)=>{

area.innerHTML += `

<div class="produto">

<h3>${p.nome}</h3>

<p>R$ ${p.preco}</p>

<p>Estoque: ${p.estoque}</p>

<button onclick="addCarrinho(${i})">Adicionar</button>

</div>

`

})

}

function addCarrinho(i){

if(produtos[i].estoque <= 0){

alert("Produto esgotado")

return

}

carrinho.push(produtos[i])

produtos[i].estoque--

document.getElementById("cartCount").innerText = carrinho.length

mostrarCarrinho()

carregarProdutos()

}

function mostrarCarrinho(){

let lista = document.getElementById("listaCarrinho")

let total = 0

lista.innerHTML=""

carrinho.forEach(p=>{

lista.innerHTML += `<li>${p.nome} - R$${p.preco}</li>`

total += p.preco

})

document.getElementById("total").innerText = total

}

function abrirCarrinho(){

document.getElementById("carrinho").style.display="block"

mostrarCarrinho()

}

function fecharCarrinho(){

document.getElementById("carrinho").style.display="none"

}

function enviarWhatsApp(){

let numero = "5583999640449"

let mensagem = "Olá, quero fazer um pedido na Kids Mel 🍬%0A%0A"

let total = 0

carrinho.forEach(p=>{

mensagem += `• ${p.nome} - R$${p.preco}%0A`

total += p.preco

})

mensagem += `%0A💰 Total: R$${total}`

mensagem += `%0A%0AKids Mel - Adoçando seu estilo de Vida`

let url = `https://wa.me/${numero}?text=${mensagem}`

window.open(url,"_blank")

}

carregarProdutos()
