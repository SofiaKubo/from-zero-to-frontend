const nodes = document.querySelectorAll('.list li');
nodes.forEach((node) => {
  node.classList.toggle('marked');
});
