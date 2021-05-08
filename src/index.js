import { createProductCard, createOrderCard } from './layoutHelpers'
import data from './data.json'

function addToOrder({ row, productName, price }) {
  const addButton = row.querySelector('button')
  const ordersColumn = document.getElementById('orders-column')

  addButton.onclick = (event) => {
    // console.log(event.target)
    // console.log(event.target.value)

    const order = createOrderCard({ productName, price })

    ordersColumn.appendChild(order)
  }
}

function createLayout() {
  console.log(data)
  
  const sushiNames = Object.keys(data.sushi_box)
  const sushiBox = data.sushi_box
  const productsColumn = document.getElementById('products-column')

  sushiNames.forEach((productName) => {
    const row = createProductCard(productName, sushiBox[productName].description)
    addToOrder({ row, productName, price: sushiBox[productName].price })

    productsColumn.appendChild(row)
  })
}

createLayout()
