import test from 'ava'
import $ from 'jsdom'
import Textarea from './../../src/components/Textarea'

test('new Textarea($element, { name, value, autofocus, defaultValue, maxLength, placeholder, readOnly, wrap })', t => {
  t.plan(17)
  const $element = doc.getElementById('textarea')
  const name = 'some-textarea'
  const value = 'some value'
  const autofocus = true
  const defaultValue = 'default value'
  const maxLength = 30
  const placeholder = 'placeholder'
  const readOnly = false
  const wrap = 'soft'

  const textarea = new Textarea($element, {
    name, value, autofocus, defaultValue, maxLength, placeholder, readOnly, wrap
  })

  // context
  t.is(textarea.$, $element)
  t.is(textarea.name, name)
  t.is(textarea.value, value)
  t.is(textarea.autofocus, autofocus)
  t.is(textarea.defaultValue, defaultValue)
  t.is(textarea.maxLength, maxLength)
  t.is(textarea.placeholder, placeholder)
  t.is(textarea.readOnly, readOnly)
  t.is(textarea.wrap, wrap)

  // render
  t.is($element.name, name)
  t.is($element.value, value)
  t.is($element.autofocus, autofocus)
  t.is($element.defaultValue, defaultValue)
  t.is($element.maxLength, maxLength)
  t.is($element.placeholder, placeholder)
  t.is($element.readOnly, readOnly)
  t.is($element.wrap, wrap)
})

test('new Textarea(...): no config', t => {
  t.plan(17)
  const $element = doc.getElementById('textarea')

  const textarea = new Textarea($element)

  // context
  t.is(textarea.$, $element)
  t.is(textarea.name, undefined)
  t.is(textarea.value, undefined)
  t.is(textarea.autofocus, undefined)
  t.is(textarea.defaultValue, undefined)
  t.is(textarea.maxLength, undefined)
  t.is(textarea.placeholder, undefined)
  t.is(textarea.readOnly, undefined)
  t.is(textarea.wrap, undefined)

  // render
  t.is($element.name, '')
  t.is($element.value, '')
  t.is($element.autofocus, false)
  t.is($element.defaultValue, '')
  t.is($element.maxLength, 0)
  t.is($element.placeholder, '')
  t.is($element.readOnly, false)
  t.is($element.wrap, '')
})

test.todo('new Textarea(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <textarea id="textarea"></textarea>
      </body>
    </html>
  `)
})
