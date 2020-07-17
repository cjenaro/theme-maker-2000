export default function html(strings, ...values) {
  const htmlTxt = strings.reduce(
    (prev, next, i) => `${prev}${values[i - 1] || ''}${next}`,
  );

  return document.createRange().createContextualFragment(htmlTxt);
}
