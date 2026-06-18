const prodotti = [

{
nome:"Latte Parmalat Intero 1000ml",
prezzo:"€1,60"
},

{
nome:"Latte Parmalat Scremato 1000ml",
prezzo:"€1,40"
},

{
nome:"Latte Arborea 1000ml",
prezzo:"€1,30"
},

{
nome:"Mozzarella Lioi",
prezzo:"€2,50"
},

{
nome:"Mozzarella Caggiano",
prezzo:"€3,10"
},

{
nome:"Mozzarella Scavone",
prezzo:"€2,50"
},

{
nome:"Philadelphia Original",
prezzo:"€2,40"
},

{
nome:"Stracchino Nonno Nanni",
prezzo:"€2,00"
},

{
nome:"Prosciutto Cotto",
prezzo:"€1,80 etto"
},

{
nome:"Prosciutto Crudo",
prezzo:"€3,50 etto"
},

{
nome:"Speck",
prezzo:"€2,90 etto"
},

{
nome:"Mortadella",
prezzo:"€1,70 etto"
},

{
nome:"Pasta Divella",
prezzo:"€0,80"
},

{
nome:"Pasta De Cecco",
prezzo:"€1,30"
},

{
nome:"Pasta Rummo",
prezzo:"€1,10"
},

{
nome:"Passata Mutti",
prezzo:"€1,60"
},

{
nome:"Uova Agriovo",
prezzo:"€2,20"
},

{
nome:"Tonno Rio Mare",
prezzo:"€6,50"
},

{
nome:"Nutella 220g",
prezzo:"€3,90"
},

{
nome:"Nutella 750g",
prezzo:"€6,80"
},

{
nome:"Acqua Lilia",
prezzo:"€2,50"
},

{
nome:"Acqua Gaudianello",
prezzo:"€2,80"
},

{
nome:"Coca Cola 1,5L",
prezzo:"€2,40"
},

{
nome:"Fanta 1,5L",
prezzo:"€2,00"
},

{
nome:"Estathé Limone",
prezzo:"€2,30"
},

{
nome:"Birra Peroni",
prezzo:"€1,00"
},

{
nome:"Detersivo Svelto Limone",
prezzo:"€2,40"
},

{
nome:"Sgrassatore Chanteclair",
prezzo:"€2,65"
},

{
nome:"Shampoo Pantene",
prezzo:"€3,60"
},

{
nome:"Bagnoschiuma Vidal",
prezzo:"€1,85"
}

];

let html="";

prodotti.forEach(p=>{

html+=`
<div class="prodotto">

<h3>${p.nome}</h3>

<p class="prezzo">${p.prezzo}</p>

<a class="btn-whatsapp"
href="https://wa.me/393273395302?text=Buongiorno,%20vorrei%20ordinare%20${encodeURIComponent(p.nome)}">

<button class="btn">
Ordina
</button>

</a>

</div>
`;

});

document.getElementById("catalogo").innerHTML=html;

function filtraProdotti(){

let filtro=document
.getElementById("search")
.value
.toLowerCase();

let cards=
document.querySelectorAll(".prodotto");

cards.forEach(card=>{

card.style.display=
card.innerText.toLowerCase()
.includes(filtro)
? "block"
: "none";

});

}
