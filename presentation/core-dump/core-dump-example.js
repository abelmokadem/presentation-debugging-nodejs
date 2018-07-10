function callMe() {
  function ikikiersio(lib) {
    require(lib.name)
  }

  function namedFunction() {
    (function() {
      ikikiersio({
        name: {hello: 'world'}
      });
    })()
  }

  (function namedInlineFunction() {
    namedFunction();
  })();
}

callMe();
