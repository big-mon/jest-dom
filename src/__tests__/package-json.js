const packageJson = require('../../package.json')

test('declares vitest as an optional peer dependency', () => {
  expect(packageJson.peerDependencies).toMatchObject({vitest: '>= 0.32'})
  expect(packageJson.peerDependenciesMeta).toMatchObject({
    vitest: {optional: true},
  })
})
