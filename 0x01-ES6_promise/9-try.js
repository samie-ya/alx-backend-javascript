export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (result) {
    queue.push(result.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}
