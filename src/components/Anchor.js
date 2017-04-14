class Anchor {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.text = config.text
      this.href = config.href
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.setAttribute('name', this.name)
    if (this.href !== undefined) this.$element.setAttribute('href', this.href)
    if (this.text !== undefined) this.$element.innerHTML = this.text
    this._addListeners()
  }

  _addListeners () {
    this.$element.addEventListener('click', this.listener)
  }
}

export default Anchor
