import test from 'ava'
import { spy } from 'sinon'
import $ from 'jsdom'
import Button from './../../src/components/Button'

test('new Button($element, { name, content, listener })', t => {
  t.plan(6)
  const $element = doc.getElementById('button')
  const name = 'learn more about cats'
  const content = 'click me'
  const listener = spy()

  const button = new Button($element, {
    name, content, listener
  })

  // context
  t.is(button.$element, $element)
  t.is(button.name, name)
  t.is(button.content, content)
  t.is(button.listener, listener)

  // render
  t.is($element.getAttribute('aria-label'), name)
  t.is($element.innerHTML, content)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.true(listener.calledOnce)
})

test('new Button(...): no config', t => {
  t.plan(6)
  const $element = doc.getElementById('button')

  const button = new Button($element)

  // context
  t.is(button.$element, $element)
  t.is(button.name, undefined)
  t.is(button.content, undefined)
  t.is(button.listener, undefined)

  // render
  t.is($element.innerHTML, '')
  t.is($element.getAttribute('aria-label'), null)

  // TODO: $element.dispatchEvent(new win.Event('click')); t.false(listener.calledOnce)
})

test.todo('new Button(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <button id="button"></button>
      </body>
    </html>
  `)
})
