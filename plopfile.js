const _ = require('lodash')

module.exports = plop => {
  plop.setGenerator('package', {
    description: 'create a package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'package name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-templates/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-templates/package.json.hbs'
      }
    ]
  })
}