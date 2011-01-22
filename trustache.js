// `trustache` - A poor man's mustache
//
// A [test suite](trustache_test.html) is available.

Trustache = {};

Trustache.double_curlies = /{{(((?!}}).)*)}}/g;

Trustache.begin = /^{{\s*/;
Trustache.end = /\s*}}$/;

Trustache.render = function(tmpl, cb) {
  return tmpl.replace(Trustache.double_curlies, function(s) {
    var inside = s.replace(Trustache.begin, '').replace(Trustache.end, '');
    return cb(inside);
  });
};

exports.Trustache = Trustache;
