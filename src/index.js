import { createDiv, createSpan } from './helpers'

function component() {
  const myDiv = createDiv()
  const mySpan = createSpan()

  myDiv.innerHTML = ['Hello', 'webpack', 'is', 'this', 'working?'].join(' ')
  mySpan.innerHTML = 'some span for testing'

  const test = document.getElementById('test-id')
  test.innerText = 'testing DOM mutation and hot reloading'

  myDiv.appendChild(mySpan)

  return myDiv
}

document.body.appendChild(component())
