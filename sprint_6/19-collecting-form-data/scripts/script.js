const onSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const result = Array.from(formData.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  console.log(result);
};

document.forms.fio.addEventListener('submit', onSubmit);
