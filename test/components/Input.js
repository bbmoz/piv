import test from 'ava'
import $ from 'jsdom'
import Input from './../../src/components/Input'

test('new Input($element, { name, type, value })', t => {
  t.plan(7)
  const $element = doc.getElementById('input')
  const name = 'username'
  const type = 'text'
  const value = 'some value'

  const input = new Input($element, {
    name, type, value
  })

  // context
  t.is(input.$element, $element)
  t.is(input.name, name)
  t.is(input.type, type)
  t.is(input.value, value)

  // render
  t.is($element.value, value)
  t.is($element.type, type)
  t.is($element.value, value)
})

test('new Input(...): no config', t => {
  t.plan(7)
  const $element = doc.getElementById('input')

  const input = new Input($element)

  // context
  t.is(input.$element, $element)
  t.is(input.name, undefined)
  t.is(input.type, undefined)
  t.is(input.value, undefined)

  // render
  t.is($element.value, '')
  t.is($element.type, 'text')
  t.is($element.value, '')
})

test.todo('new Input(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <input id="input"></input>
      </body>
    </html>
  `)
})
