let w = [], a = 0.03;
function initialization(n) {
  w = Array.from({length: n}, Math.random)
}

function neuron(x, w) {
  const y = w.reduce((acc, cv, index) => acc + x[index] * cv, 0)
  return (1 / (1 + Math.exp( -a * y)))
}

initialization(3)
neuron([5, 2, 3], w)

const Xn = 20, Yn = 10, P = 2, N = 3, L = 0.5, R = 1;
const buf = [], Ts = [], Result = ["Левая сторона", "Правая сторона"]
function teach() {
  const k = Ts.length, n = 0.1
  for (let i = 0; i < k; i++) {
    const b = Ts[i][2] - neuron([Ts[i][0], Ts[i][1], 1], w)
    for (let j = 0; j < N - 1; j++) {
      for (let l = 0; l <= 1; l++) {
        w[j] += n * b * Ts[i][l]
      }
    }
    w[N - 1] += n * b
  }
}

function cArr(x, y) {
  let number = 0
  for (let i = 1; i <= x; i++) {

  }
}
