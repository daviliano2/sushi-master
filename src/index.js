import { createProductCard } from './layoutHelpers'
import { addCreateTobutton, updatePrice } from './formHelpers'
import data from './data.json'

function createLayout() {
  const sushiNames = Object.keys(data.sushi_box)
  const sushiBox = data.sushi_box
  const productsColumn = document.getElementById('products-column')

  sushiNames.forEach((productName) => {
    const row = createProductCard(productName, sushiBox[productName].description)
    addCreateTobutton({ row, productName, price: sushiBox[productName].price })

    productsColumn.appendChild(row)
  })

  const ordersForm = document.getElementById('orders-form')
  ordersForm.onchange = (event) => {
    const element = event.target
    const parent = element.parentNode
    const priceElement = parent.querySelector('[data-size]')
    const hiddenPriceInput = parent.querySelector('input')

    if (element.localName === 'select') {
      updatePrice({ priceElement, multiplier: element.value, hiddenPriceInput, parent })
    }
  }
}

createLayout()
