class KeywordChat {
  buildComponents(){
    // get app div
    this.appDiv = document.getElementById('app')

    // build components
    console.log('Building components...')

    // top title
    this.title = document.createElement('h1')
    this.titleText = document.createTextNode('Keyword Chat')
    this.title.appendChild(this.titleText)

    // chat box full of LIES!!!
    this.lieBox = document.createElement('ul')
    this.tTTL = document.createElement('li')
    this.coolTextNode = document.createTextNode('hello')
    this.tTTL.appendChild(this.coolTextNode)
    this.lieBox.appendChild(this.tTTL)
    this.lieBox.setAttribute('id', 'lie-box')

    // applying all of that
    this.appDiv.appendChild(this.title)
    this.appDiv.appendChild(this.lieBox)
  }
}
