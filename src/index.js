import './styles/thebutton.css';
import Tools from './modules/tools';
import Output from './modules/output';
import createMachine from './modules/stateMachine.js';

const app = document.getElementById('app');
const toggler = document.querySelector('.get-code-cta');
const FRAGMENTS = {
  tools: Tools,
  output: Output,
};

function rerender(prevState, currentState) {
  app.innerHTML = '';
  app.appendChild(FRAGMENTS[currentState]());
}

const toggleMachine = createMachine(
  {
    tools: {
      actions: {
        onEnter: () => {
          toggler.textContent = 'gimme!';
        },
      },
      transitions: {
        switch: {
          target: 'output',
        },
      },
    },
    output: {
      actions: {
        onEnter: () => {
          toggler.textContent = 'tweak button!';
        },
      },
      transitions: {
        switch: {
          target: 'tools',
        },
      },
    },
  },
  rerender,
);

let state = toggleMachine.value;
function toggleState() {
  state = toggleMachine.transition(state, 'switch');
}

app.appendChild(Tools());
toggler.addEventListener('click', toggleState);
