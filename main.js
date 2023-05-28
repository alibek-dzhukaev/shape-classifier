import './style.css'

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
