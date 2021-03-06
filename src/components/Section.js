class Section {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.content = config.content
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.setAttribute('aria-label', this.name)
    if (this.content !== undefined) this.$element.innerHTML = this.content
    this.$element.setAttribute('role', 'contentinfo')
  }

  get $ () {
    return this.$element
  }
}

export default Section
