/**
 * Motor de movimento: um único loop de requestAnimationFrame, baseado em tempo decorrido.
 * Cada tarefa recebe o dt em segundos e devolve `true` enquanto ainda precisa de quadros.
 * Sem tarefas ativas, o loop dorme até alguém chamar `acordar()`.
 */

export type Tarefa = (dt: number) => boolean;

const tarefas = new Set<Tarefa>();
let rodando = false;
let ultimo = 0;

function quadro(agora: number) {
  // Limita o dt para a volta de uma aba em segundo plano não virar um salto
  const dt = Math.min((agora - ultimo) / 1000, 0.05);
  ultimo = agora;
  let continuar = false;
  for (const tarefa of tarefas) {
    if (tarefa(dt)) continuar = true;
  }
  if (continuar) {
    requestAnimationFrame(quadro);
  } else {
    rodando = false;
  }
}

export function acordar() {
  if (rodando) return;
  rodando = true;
  ultimo = performance.now();
  requestAnimationFrame(quadro);
}

export function adicionar(tarefa: Tarefa) {
  tarefas.add(tarefa);
  acordar();
  return () => tarefas.delete(tarefa);
}

/** Aproximação exponencial independente da taxa de quadros. `rapidez` em 1/s. */
export function aproximar(atual: number, alvo: number, dt: number, rapidez: number) {
  return alvo + (atual - alvo) * Math.exp(-rapidez * dt);
}
