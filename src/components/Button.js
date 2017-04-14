class Button {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.text = config.text
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.setAttribute('aria-label', this.name)
    if (this.text !== undefined) this.$element.innerHTML = this.text
    this._addListeners()
  }

  _addListeners () {
    this.$element.addEventListener('click', this.listener)
  }
}

export default Button
