const container = document.querySelector('.container');

async function addDiv(x, y) {
  if (container.childNodes.length > 128) {
    throw new Error('too many cats');
  }
  const newDiv = document.createElement('div');
  newDiv.classList.add('inner-div');

  newDiv.style.left = `${x}px`;
  newDiv.style.top = `${y}px`;

  return newDiv;
}

container.onclick = async (ev) => {
  try {
    const divElem = await addDiv(ev.x, ev.y);
    divElem.textContent = '🐱';
    divElem.setAttribute('dx', 10 * Math.random() - 5);
    divElem.setAttribute('dy', 10 * Math.random() - 5);
    container.appendChild(divElem);
  } catch (err) {
    console.error('cant add cat', err);
  }
};

async function calcNode(node, dt, containerRect) {
  let dx = parseFloat(node.getAttribute('dx'));
  let dy = parseFloat(node.getAttribute('dy'));

  node.style.left = `${parseFloat(node.style.left) + 10 * ((dx * dt) / 1000)}px`;
  node.style.top = `${parseFloat(node.style.top) + 10 * ((dy * dt) / 1000)}px`;

  let rect = node.getBoundingClientRect();

  if (
    rect.left > containerRect.right ||
    rect.right < containerRect.left ||
    rect.bottom < containerRect.top ||
    rect.top > containerRect.bottom
  ) {
    throw { err: 'cat run away', node };
  }

  return { node };
}

async function drawFrame(prevDate) {
  let now = Date.now();
  let dt = Math.max(1, now - prevDate);
  let containerRect = container.getBoundingClientRect();

  let calcPromises = [];

  container.childNodes.forEach((node) => {
    if (node instanceof Element && node.classList.contains('inner-div')) {
      calcPromises.push(calcNode(node, dt, containerRect));
    }
  });
  const results = await Promise.allSettled(calcPromises);
  results.filter((r) => r.status === 'rejected').forEach((r) => container.removeChild(r.reason.node));
  requestAnimationFrame(() => drawFrame(now));
}

document.addEventListener('DOMContentLoaded', () => {
  drawFrame(Date.now());
});
