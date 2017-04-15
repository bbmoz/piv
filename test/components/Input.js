import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Input from './../../src/components/Input'

test('new Input($element, { name, type, value, listener })', t => {
  t.plan(8)
  const $element = doc.getElementById('input')
  const name = 'username'
  const type = 'text'
  const value = 'some value'
  const listener = spy()

  const input = new Input($element, {
    name, type, value, listener
  })

  // context
  t.is(input.$element, $element)
  t.is(input.name, name)
  t.is(input.type, type)
  t.is(input.value, value)
  t.is(input.listener, listener)

  // render
  t.is($element.value, value)
  t.is($element.type, type)
  t.is($element.value, value)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Input(...): no config', t => {
  t.plan(8)
  const $element = doc.getElementById('input')

  const input = new Input($element)

  // context
  t.is(input.$element, $element)
  t.is(input.name, undefined)
  t.is(input.type, undefined)
  t.is(input.value, undefined)
  t.is(input.listener, undefined)

  // render
  t.is($element.value, '')
  t.is($element.type, 'text')
  t.is($element.value, '')

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
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
