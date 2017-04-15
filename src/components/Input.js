class Input {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.type = config.type
      this.value = config.value
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.alt = this.name
    if (this.type !== undefined) this.$element.type = this.type
    if (this.value !== undefined) this.$element.value = this.value
    if (this.listener !== undefined) this._addListeners()
  }

  _addListeners () {
    this.$element.addEventListener('click', this.listener)
  }
}

export default Input
