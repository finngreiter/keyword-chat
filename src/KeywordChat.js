class KeywordChat {
  buildComponents(){
    // get app div

    this.appDiv = document.getElementById('app')

    // build components
    console.log('Building components...')

    this.title = document.createElement('h1')
    this.titleText = document.createTextNode('Keyword Chat')
    this.title.appendChild(this.titleText)
    this.appDiv.appendChild(this.title)
  }
}
