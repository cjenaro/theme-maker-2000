export const inputsToInject = [
  {
    type: 'color',
    id: 'color',
    initialValue: '#212d36',
    label: 'Color',
    cssVar: 'color',
  },
  {
    type: 'color',
    id: 'background-color',
    initialValue: '#fbbfca',
    label: 'Background Color',
    cssVar: 'backgroundColor',
  },
  {
    type: 'range',
    id: 'font-size',
    initialValue: '32',
    label: 'Font size',
    cssVar: 'fontSize',
    suffix: 'px',
    max: 100,
    min: 1,
  },
];

export const aggrupatedInputs = [
  {
    label: 'Border width',
    suffix: 'px',
    inputs: [
      {
        type: 'number',
        id: 'border-top-width',
        initialValue: '16',
        cssVar: 'borderTopWidth',
      },
      {
        type: 'number',
        id: 'border-right-width',
        initialValue: '16',
        cssVar: 'borderRightWidth',
      },
      {
        type: 'number',
        id: 'border-bottom-width',
        initialValue: '16',
        cssVar: 'borderBottomWidth',
      },
      {
        type: 'number',
        id: 'border-left-width',
        initialValue: '16',
        cssVar: 'borderLeftWidth',
      },
    ],
  },
  {
    label: 'Border color',
    inputs: [
      {
        type: 'color',
        id: 'border-top-color',
        initialValue: '#212d36',
        cssVar: 'borderTopColor',
      },
      {
        type: 'color',
        id: 'border-right-color',
        initialValue: '#212d36',
        cssVar: 'borderRightColor',
      },
      {
        type: 'color',
        id: 'border-bottom-color',
        initialValue: '#212d36',
        cssVar: 'borderBottomColor',
      },
      {
        type: 'color',
        id: 'border-left-color',
        initialValue: '#212d36',
        cssVar: 'borderLeftColor',
      },
    ],
  },
];
