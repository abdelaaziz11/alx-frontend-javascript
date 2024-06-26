export default function guardrail(mathFunction) {
  const queue = [];
  let results;
  try {
    results = mathFunction();
  } catch (error) {
    results = `Error: ${error.message}`;
  }
  queue.push(results);
  queue.push('Guardrail was processed');

  return queue;
}
