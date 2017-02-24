function compose(f, g) {
  return function(x) {
    return f(g(x));
  }
}

const compose = (f, g) => (x => f(g(x)))