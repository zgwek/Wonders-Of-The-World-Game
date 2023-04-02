const cards = [
{
    name: 'Chichen-Itza',
    img:'images/Chichen-Itza.png',
},
{
    name: 'Christ-Redeemer',
    img:'images/Christ-Redeemer.png',
},
{
    name: 'Colosseum',
    img:'images/Colosseum.png',
},
{
    name: 'Great-Wall',
    img:'images/Great-Wall.png',
},
{
    name: 'Machu-Picchu',
    img:'images/Machu-Picchu.png',
},
{
    name: 'Petra',
    img:'images/Petra.png',
},
{
    name: 'Taj-Mahal',
    img:'images/Taj-Mahal.png',
},
{
    name: 'Chichen-Itza',
    img:'images/Chichen-Itza.png',
},
{
    name: 'Christ-Redeemer',
    img:'images/Christ-Redeemer.png',
},
{
    name: 'Colosseum',
    img:'images/Colosseum.png',
},
{
    name: 'Great-Wall',
    img:'images/Great-Wall.pngg',
},
{
    name: 'Machu-Picchu',
    img:'images/Machu-Picchu.png',
},
{
    name: 'Petra',
    img:'images/Petra.png',
},
{
    name: 'Taj-Mahal',
    img:'images/Taj-Mahal.png',
},


]

cards.sort( () => 0.5 - Math.random())

const cardDisplay = document.querySelector('#grid')
const selectedCard = []
const matchedCardId = []

console.log(cardDisplay)

function createBoard () {
    let data = 0;
    cards.forEach(element => {
       const card =  document.createElement('img')
       card.setAttribute('src','images/card-design.png')
       card.setAttribute('data-id',data)
       card.addEventListener('click',flip)
       cardDisplay.appendChild(card)
       data++;

    });
    
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    console.log("check")
    if (selectedCard[0] == selectedCard[1]){
    alert('Match!')
    //cards[]
    }
}

function flip(){
    const cardId = this.getAttribute('data-id')
    selectedCard.push(cards[cardId].name)
    matchedCardId.push(cardId)
    console.log(matchedCardId)
    //console.log('clicked',cardId)
    //console.log(selectedCard)
    this.setAttribute('src',cards[cardId].img)
    if (selectedCard.length === 2)
    setTimeout(checkMatch,10000)
}