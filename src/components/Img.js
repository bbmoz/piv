class Img {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.src = config.src
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.alt = this.name
    if (this.src !== undefined) this.$element.src = this.src
  }
}

export default Img
