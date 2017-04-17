class Textarea {
  constructor ($element, config) {
    this.$element = $element
    if (config) {
      this.name = config.name
      this.value = config.value
      this.autofocus = config.autofocus
      this.defaultValue = config.defaultValue
      this.maxLength = config.maxLength
      this.placeholder = config.placeholder
      this.readOnly = config.readOnly
      this.wrap = config.wrap
      this._init()
    }
  }

  _init () {
    if (this.name !== undefined) this.$element.name = this.name
    if (this.value !== undefined) this.$element.value = this.value
    if (this.autofocus !== undefined) this.$element.autofocus = this.autofocus
    if (this.defaultValue !== undefined) this.$element.defaultValue = this.defaultValue
    if (this.maxLength !== undefined) this.$element.maxLength = this.maxLength
    if (this.placeholder !== undefined) this.$element.placeholder = this.placeholder
    if (this.readOnly !== undefined) this.$element.readOnly = this.readOnly
    if (this.wrap !== undefined) this.$element.wrap = this.wrap
  }

  get $ () {
    return this.$element
  }
}

export default Textarea
