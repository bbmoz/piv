import test from 'ava'
import $ from 'jsdom'
import Select from './../../src/components/Select'

test('new Select($element, { name, autofocus, multiple, size })', t => {
  t.plan(9)
  const $element = doc.getElementById('select')
  const name = 'some-select'
  const autofocus = true
  const multiple = true
  const size = 4

  const select = new Select($element, {
    name, autofocus, multiple, size
  })

  // context
  t.is(select.$, $element)
  t.is(select.name, name)
  t.is(select.autofocus, autofocus)
  t.is(select.multiple, multiple)
  t.is(select.size, size)

  // render
  t.is($element.name, name)
  t.is($element.autofocus, autofocus)
  t.is($element.multiple, multiple)
  t.is($element.size, size)
})

test('new Select(...): no config', t => {
  t.plan(9)
  const $element = doc.getElementById('select')

  const select = new Select($element)

  // context
  t.is(select.$, $element)
  t.is(select.name, undefined)
  t.is(select.autofocus, undefined)
  t.is(select.multiple, undefined)
  t.is(select.size, undefined)

  // render
  t.is($element.name, '')
  t.is($element.autofocus, false)
  t.is($element.multiple, false)
  t.is($element.size, 0)
})

test.todo('new Select(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <select id="select"></select>
      </body>
    </html>
  `)
})
