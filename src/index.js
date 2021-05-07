import { createProductCard } from './layoutHelpers'
import data from './data.json'

function addToOrder(row, price) {
  const addButton = row.querySelector('button')

  // TODO: next step: create the right HTML order layout inside helpers and append it
  addButton.onclick = (event) => {
    console.log(event.target)
    console.log(event.target.value)
    document.getElementById('order-summary').append(event.target.value)
    document.getElementById('order-summary').append(price)
  }
}

function createLayout() {
  console.log(data)
  console.log(Object.keys(data.sushi_box))
  const sushiNames = Object.keys(data.sushi_box)
  const sushiBox = data.sushi_box
  const leftColumn = document.getElementById('left-column')

  sushiNames.forEach((name) => {
    const row = createProductCard(name, sushiBox[name].description)
    addToOrder(row, sushiBox[name].price)

    leftColumn.appendChild(row)
  })
}

createLayout()
