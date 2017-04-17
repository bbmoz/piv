import test from 'ava'
import $ from 'jsdom'
import Img from './../../src/components/Img'

test('new Img($element, { name, alt })', t => {
  t.plan(5)
  const $element = doc.getElementById('img')
  const name = 'img with info'
  const src = '#some-name'

  const img = new Img($element, {
    name, src
  })

  // context
  t.is(img.$element, $element)
  t.is(img.name, name)
  t.is(img.src, src)

  // render
  t.is($element.alt, name)
  t.is($element.getAttribute('src'), src)
})

test('new Img(...): no config', t => {
  t.plan(5)
  const $element = doc.getElementById('img')

  const img = new Img($element)

  // context
  t.is(img.$element, $element)
  t.is(img.name, undefined)
  t.is(img.src, undefined)

  // render
  t.is($element.alt, '')
  t.is($element.getAttribute('src'), null)
})

test.todo('new Img(...): missing config props')

let doc
test.beforeEach('setup', () => {
  doc = $.jsdom(`
    <html>
      <body>
        <img id="img" />
      </body>
    </html>
  `)
})
