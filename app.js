const cards = [
{
    name: 'Chichen-Itza',
    img:'images\Chichen-Itza.png',
},
{
    name: 'Christ-Redeemer',
    img:'images\Christ-Redeemer.png',
},
{
    name: 'Colosseum',
    img:'images\Colosseum.png',
},
{
    name: 'Great-Wall',
    img:'images\Great-Wall.pngg',
},
{
    name: 'Machu-Picchu',
    img:'images\Machu-Picchu.png',
},
{
    name: 'Petra',
    img:'images\Petra.png',
},
{
    name: 'Taj-Mahal',
    img:'images\Taj-Mahal.png',
},
{
    name: 'Chichen-Itza',
    img:'images\Chichen-Itza.png',
},
{
    name: 'Christ-Redeemer',
    img:'images\Christ-Redeemer.png',
},
{
    name: 'Colosseum',
    img:'images\Colosseum.png',
},
{
    name: 'Great-Wall',
    img:'images\Great-Wall.pngg',
},
{
    name: 'Machu-Picchu',
    img:'images\Machu-Picchu.png',
},
{
    name: 'Petra',
    img:'images\Petra.png',
},
{
    name: 'Taj-Mahal',
    img:'images\Taj-Mahal.png',
},


]

cards.sort( () => 0.5 - Math.random())

const cardDisplay = document.querySelector('#grid')

console.log(cardDisplay)

function createBoard () {
    cards.forEach(element => {
       const card =  document.createElement('img')
       card.setAttribute('src','images\blank.png')
       console.log(card)
    });
    
}

createBoard()