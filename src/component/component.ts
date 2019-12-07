export default (text = "Hello world"): HTMLElement => {
  const element = document.createElement("div");

  element.innerHTML = text;
  element.className = "text-blue-900";

  return element;
};
