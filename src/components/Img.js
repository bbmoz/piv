class Img {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.src = config.src
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.alt = this.name
    if (this.src !== undefined) this.$element.src = this.src
    if (this.listener !== undefined)this._addListeners()
  }

  _addListeners () {
    this.$element.addEventListener('click', this.listener)
  }
}

export default Img
