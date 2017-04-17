import test from 'ava'
import $ from 'jsdom'
import Button from './../../src/components/Button'

test('new Button($element, { name, content })', t => {
  t.plan(5)
  const $element = doc.getElementById('button')
  const name = 'learn more about cats'
  const content = 'click me'

  const button = new Button($element, {
    name, content
  })

  // context
  t.is(button.$element, $element)
  t.is(button.name, name)
  t.is(button.content, content)

  // render
  t.is($element.getAttribute('aria-label'), name)
  t.is($element.innerHTML, content)
})

test('new Button(...): no config', t => {
  t.plan(5)
  const $element = doc.getElementById('button')

  const button = new Button($element)

  // context
  t.is(button.$element, $element)
  t.is(button.name, undefined)
  t.is(button.content, undefined)

  // render
  t.is($element.innerHTML, '')
  t.is($element.getAttribute('aria-label'), null)

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
