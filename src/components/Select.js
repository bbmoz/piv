class Select {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.autofocus = config.autofocus
      this.multiple = config.multiple
      this.size = config.size
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.name = this.name
    if (this.autofocus !== undefined) this.$element.autofocus = this.autofocus
    if (this.multiple !== undefined) this.$element.multiple = this.multiple
    if (this.size !== undefined) this.$element.size = this.size
    if (this.wrap !== undefined) this.$element.wrap = this.wrap
  }

  get $ () {
    return this.$element
  }
}

export default Select
