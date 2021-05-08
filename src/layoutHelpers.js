import data from './data.json'

export function createCustomElement({ htmlTag = 'div', className = null } = {}) {
  const element = document.createElement(htmlTag)

  if (className) element.className = className

  return element
}

export function createProductCard(productName, productDescription) {
  const card = createCustomElement({ className: 'card' })
  const cardBody = createCustomElement({ className: 'card-body' })
  const textWrapper = createCustomElement()
  const divProductName = createCustomElement()
  const divProductDescription = createCustomElement()
  const addButton = createCustomElement({ htmlTag: 'button', className: 'btn btn-primary' })

  divProductName.innerText = productName
  divProductDescription.innerText = productDescription
  addButton.id = `button-${productName}`
  addButton.type = 'button'
  addButton.innerText = '+'
  addButton.value = productName

  textWrapper.appendChild(divProductName)
  textWrapper.appendChild(divProductDescription)
  cardBody.appendChild(textWrapper)
  cardBody.appendChild(addButton)
  card.appendChild(cardBody)

  return card
}

export function createOrderCard({ productName, price }) {
  const cardBody = createCustomElement({ className: 'card-body' })
  const divProductName = createCustomElement({ className: 'col' })
  const divProductSize = createCustomElement({ htmlTag: 'select', className: 'form-select col' })
  const divProductPrice = createCustomElement({ className: 'col align-right' })
  const removeButton = createCustomElement({
    htmlTag: 'button',
    className: 'btn btn-outline-danger btn-sm',
  })

  const sizes = data.size_multipliers

  Object.keys(sizes).forEach(size => {
    const selectOption = createCustomElement({htmlTag: 'option'})
    selectOption.value = sizes[size]
    selectOption.innerText = size
    divProductSize.appendChild(selectOption)
  })

  divProductName.innerText = productName
  divProductPrice.innerText = price
  removeButton.type = 'button'
  removeButton.innerText = 'x'

  divProductPrice.appendChild(removeButton)
  cardBody.appendChild(divProductName)
  cardBody.appendChild(divProductSize)
  cardBody.appendChild(divProductPrice)

  return cardBody
}
