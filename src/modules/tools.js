import html from './html';
import { inputsToInject, aggrupatedInputs } from './inputs';

function createLabeledInputGroup({ label, inputs, suffix }) {
  const frag = html`
    <label>
      ${label}:
      <div class="aggrupated-inputs">
        ${inputs.reduce(
          (acc, { id, cssVar, type, initialValue }) => `
    ${acc}
      <input
        ${suffix ? `data-suffix="${suffix}"` : ''}
        data-cssvar="${cssVar}"
        type="${type}"
        value="${initialValue}"
      />
  `,
          '',
        )}
      </div>
    </label>
  `;

  const fragInputs = frag.querySelectorAll('input');
  Array.from(fragInputs).forEach((fragInput) =>
    fragInput.addEventListener('change', handleInputChange),
  );

  return frag;
}

function createLabeledInput({
  id,
  min,
  max,
  cssVar,
  label,
  type,
  initialValue,
  suffix,
}) {
  const frag = html`
    <label for="${id}">
      ${label}:
      <input
        ${suffix ? `data-suffix="${suffix}"` : ''}
        data-cssvar="${cssVar}"
        type="${type}"
        ${min && max && `min="${min}" max="${max}"`}
        value="${initialValue}"
      />
    </label>
  `;

  const input = frag.querySelector('input');
  input.addEventListener('change', handleInputChange);

  return frag;
}

const thebutton = document.querySelector('#thebutton');
function handleInputChange() {
  const varName = `--${this.dataset.cssvar}`;
  const suffix = this.dataset.suffix;
  thebutton.style.setProperty(
    varName,
    suffix ? `${this.value}${suffix}` : this.value,
  );
}

const toolsBody = document.querySelector('.tools .tools__body');

const Tools = () => {
  const toolsFragment = html`
    <div class="tools">
      <div class="tools__header">
        <h4>Tools</h4>
      </div>
      <div class="tools__body"></div>
    </div>
  `;
  const toolsBody = toolsFragment.querySelector('.tools__body');
  inputsToInject.forEach((input) => {
    const inputFrag = createLabeledInput({ ...input });
    toolsBody.appendChild(inputFrag);
  });

  aggrupatedInputs.forEach((input) => {
    const aggrInputsFrag = createLabeledInputGroup({ ...input });
    toolsBody.appendChild(aggrInputsFrag);
  });

  return toolsFragment;
};

export default Tools;
