export function createDiv(className) {
  const element = document.createElement('div')
  
  if (className) element.className = className

  return element
}

export function createProductCard(productName, productDescription) {
  const card = createDiv('card')
  const cardBody = createDiv('card-body with-space-between')
  const textWrapper = createDiv()
  const divProductName = createDiv()
  const divProductDescription = createDiv()
  const addButton = document.createElement('button')

  divProductName.innerText = productName
  divProductDescription.innerText = productDescription
  addButton.id = `button-${productName}`
  addButton.type = 'button'
  addButton.className = 'btn btn-primary'
  addButton.innerText = '+'
  addButton.value = productName

  textWrapper.appendChild(divProductName)
  textWrapper.appendChild(divProductDescription)
  cardBody.appendChild(textWrapper)
  cardBody.appendChild(addButton)
  card.appendChild(cardBody)

  return card
}
