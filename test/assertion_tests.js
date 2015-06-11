'use strict';

require('./_helpers');

describe('assertions', function() {
  var blog = { title: 'JavaScript Ramblings' };
  var article = { title: 'First Post', blog: blog };
  blog.articles = [article];

  it('shifts subject back to original', function() {
    article.should
      .have.property('blog').that.and.also
      .have.deep.property('blog.articles').and.also
      .have.property('title');
  });

  it('works with nested properties', function() {
    article.should
      .have.property('blog').that.has.property('title').that.is.a('string')
      .and.also
      .have.deep.property('blog.articles').that.is.an('array')
      .and.also
      .have.property('title').that.is.a('string');
  });

});
