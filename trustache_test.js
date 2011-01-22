// This is the [vows](http://vowsjs.org/) test suite for [trustache](trustache.html).

var  vows = require('vows'),
   assert = require('assert')
trustache = require('./trustache').Trustache;

vows.describe('Rendering').addBatch({
  'A single-line template': {
    'topic': "{{ greeting }} I'm {{ name }}",
    'rendering with a hash object': function(tmpl) {
      var me = {"name": "Ben", "greeting": "Hi"};
      var expected = "Hi I'm Ben";
      var output = Trustache.render(tmpl, function(s) {
        return encodeURI(me[s]);
      });
      assert.equal(output, expected);
    }
  }
}).export(module);
