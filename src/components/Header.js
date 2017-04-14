class Header {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.content = config.content
      this.listener = config.listener
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.setAttribute('aria-label', this.name)
    if (this.content !== undefined) this.$element.innerHTML = this.content
    this.$element.setAttribute('role', 'contentinfo')
    if (this.listener !== undefined)this._addListeners()
  }

  _addListeners () {
    this.$element.addEventListener('click', this.listener)
  }
}

export default Header
