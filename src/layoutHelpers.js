import { roundDecimals } from './formHelpers'
import data from './data.json'

export function createCustomElement({
  htmlTag = 'div',
  className = null,
  text = null,
  type = null,
} = {}) {
  const element = document.createElement(htmlTag)

  if (className) element.className = className
  if (text) element.innerText = text
  if (type) element.type = type

  return element
}

export function createProductCard(productName, productDescription) {
  const card = createCustomElement({ className: 'card' })
  const cardBody = createCustomElement({ className: 'card-body' })
  const textWrapper = createCustomElement()
  const divProductName = createCustomElement({ text: productName })
  const divProductDescription = createCustomElement({ text: productDescription })
  const addButton = createCustomElement({
    htmlTag: 'button',
    className: 'btn btn-primary',
    text: '+',
    type: 'button',
  })

  addButton.id = `button-${productName}`
  addButton.value = productName

  textWrapper.appendChild(divProductName)
  textWrapper.appendChild(divProductDescription)
  cardBody.appendChild(textWrapper)
  cardBody.appendChild(addButton)
  card.appendChild(cardBody)

  return card
}

export function createOrderRow({ productName, price }) {
  const sizes = data.size_multipliers
  const cardBody = createCustomElement({ className: 'card-body' })
  const divProductName = createCustomElement({ className: 'col', text: productName })
  const selectProductSize = createCustomElement({ htmlTag: 'select', className: 'form-select col' })
  const divProductPrice = createCustomElement({ className: 'col align-right' })
  const spanPrice = createCustomElement({ htmlTag: 'span', text: price })
  spanPrice.setAttribute('data-size', 'Small')
  const spanCurrency = createCustomElement({ htmlTag: 'span', text: ' €' })
  const inputProductPriceValue = createCustomElement({
    htmlTag: 'input',
    type: 'hidden',
  })
  const removeButton = createCustomElement({
    htmlTag: 'button',
    className: 'btn btn-outline-danger btn-sm',
    text: 'x',
    type: 'button',
  })

  Object.keys(sizes).forEach((size) => {
    const selectOption = createCustomElement({ htmlTag: 'option', text: size })
    selectOption.value = sizes[size]
    inputProductPriceValue.value = price
    selectProductSize.appendChild(selectOption)
  })

  divProductPrice.appendChild(spanPrice)
  divProductPrice.appendChild(spanCurrency)
  divProductPrice.appendChild(removeButton)
  divProductPrice.appendChild(inputProductPriceValue)
  cardBody.appendChild(divProductName)
  cardBody.appendChild(selectProductSize)
  cardBody.appendChild(divProductPrice)

  return cardBody
}
