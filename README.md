# Chai-Also

[![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Code Climate][codeclimate-image]][codeclimate-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][david-image]][david-url] [![devDependencies][david-dev-image]][david-dev-url]

[Chai][chai] plugin to add `also` property which accesses the original object
when using [`property`][chai-property].

```js
chai.use(require('chai-also'));

var blog = { title: 'JavaScript Ramblings' };
var article = { title: 'First Post', blog: blog };
blog.articles = [article];

article.should
  .have.property('blog').that.has.property('title').that.is.a('string')
  .and.also
  .have.property('articles').that.is.an('array')
  .and.also
  .have.property('title').that.is.a('string');
```


## License

This project is distributed under the MIT license.


[chai]: http://chaijs.com/
[chai-property]: http://chaijs.com/api/bdd/#-property-name-value-

[travis-image]: http://img.shields.io/travis/wbyoung/chai-also.svg?style=flat
[travis-url]: http://travis-ci.org/wbyoung/chai-also
[npm-image]: http://img.shields.io/npm/v/chai-also.svg?style=flat
[npm-url]: https://npmjs.org/package/chai-also
[codeclimate-image]: http://img.shields.io/codeclimate/github/wbyoung/chai-also.svg?style=flat
[codeclimate-url]: https://codeclimate.com/github/wbyoung/chai-also
[coverage-image]: http://img.shields.io/coveralls/wbyoung/chai-also.svg?style=flat
[coverage-url]: https://coveralls.io/r/wbyoung/chai-also
[david-image]: http://img.shields.io/david/wbyoung/chai-also.svg?style=flat
[david-url]: https://david-dm.org/wbyoung/chai-also
[david-dev-image]: http://img.shields.io/david/dev/wbyoung/chai-also.svg?style=flat
[david-dev-url]: https://david-dm.org/wbyoung/chai-also#info=devDependencies
