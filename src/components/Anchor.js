class Anchor {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.content = config.content
      this.href = config.href
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.setAttribute('name', this.name)
    if (this.href !== undefined) this.$element.setAttribute('href', this.href)
    if (this.content !== undefined) this.$element.innerHTML = this.content
  }
}

export default Anchor
