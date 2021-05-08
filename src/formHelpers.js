import { createOrderRow } from './layoutHelpers'
import data from './data.json'

// Just because javascript is "amazing" with numbers
export function roundDecimals({ price }) {
  return Math.round(price * 100) / 100
}

export function updatePrice({ priceElement, multiplier, hiddenPriceInput, parent }) {
  const sizes = data.size_multipliers
  const currentSize = priceElement.dataset.size
  const currentPrice = roundDecimals({ price: parseFloat(priceElement.textContent) })
  const rawNewPrice = (currentPrice * multiplier) / sizes[currentSize]
  const newPrice = roundDecimals({ price: rawNewPrice })
  hiddenPriceInput.value = newPrice

  const difference = newPrice - currentPrice
  let remove = false
  if (difference < 0) remove = true

  calculateTotal({ price: Math.abs(difference), remove })

  Object.keys(sizes).forEach((size) => {
    if (parseFloat(sizes[size]) === parseFloat(multiplier)) {
      priceElement.dataset.size = size
    }
  })

  priceElement.innerText = newPrice

  addDeleteToButton({ row: parent })
}

function getPriceWithVat() {
  const totalPrice = parseFloat(document.getElementById('total-value-input').value)
  const priceVat = totalPrice * data.vat
  const vatText = document.getElementById('total-value-vat')

  vatText.innerText = roundDecimals({ price: priceVat })
}

function calculateTotal({ price, remove = false }) {
  const totalPriceText = document.getElementById('total-value')
  const totalPriceInput = document.getElementById('total-value-input')
  let totalPrice = parseFloat(document.getElementById('total-value-input').value)

  totalPrice = remove ? totalPrice - price : totalPrice + price
  totalPriceInput.value = roundDecimals({ price: totalPrice })
  totalPriceText.innerText = roundDecimals({ price: totalPrice })

  getPriceWithVat()
}

function updateOrdersHeader() {
  const ordersColumn = document.getElementById('orders-column')

  // we remove 1 element because it is not an order but
  // just the HTML header tag of this area
  const totalAmountOrders = ordersColumn.children.length - 1
  const totalOrders = document.getElementById('total-orders')
  const boxesText = totalAmountOrders === 1 ? 'box' : 'boxes'
  totalOrders.innerText = `${totalAmountOrders} sushi ${boxesText}`
}

function addDeleteToButton({ row }) {
  const removeButton = row.querySelector('button')
  const currentPrice = parseFloat(row.querySelector('input').value)

  removeButton.onclick = (event) => {
    row.remove()
    calculateTotal({ price: currentPrice, remove: true })
    updateOrdersHeader()
  }
}

export function addCreateTobutton({ row, productName, price }) {
  const sizes = data.size_multipliers
  const addButton = row.querySelector('button')
  const ordersColumn = document.getElementById('orders-column')
  const rawDefaultPrice = price * sizes.Small
  const defaultPrice = roundDecimals({ price: rawDefaultPrice })

  addButton.onclick = (event) => {
    const order = createOrderRow({ productName, price: defaultPrice })

    calculateTotal({ price: defaultPrice })
    ordersColumn.appendChild(order)
    updateOrdersHeader()
    addDeleteToButton({ row: order })
  }
}
