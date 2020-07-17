import html from './html';
import { inputsToInject, aggrupatedInputs } from './inputs';

const button = document.getElementById('thebutton');
function Output() {
  const computedStyle = window.getComputedStyle(thebutton);
  const fontSize = computedStyle.getPropertyValue('font-size');

  return html` <div class="output">
    <div class="output__header">
      <h4>Your button!</h4>
    </div>
    <div class="output__body">
      <code>
        ${inputsToInject
          .map(
            (input) =>
              `${input.id}: ${computedStyle.getPropertyValue(input.id)}`,
          )
          .join(';</br>')}
        ${aggrupatedInputs
          .flatMap((g) => g.inputs)
          .map(
            (input) =>
              `${input.id}: ${computedStyle.getPropertyValue(input.id)}`,
          )
          .join(';</br>')}
      </code>
    </div>
  </div>`;
}

export default Output;
