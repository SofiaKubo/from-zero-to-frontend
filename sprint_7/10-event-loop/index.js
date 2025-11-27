document.addEventListener('DOMContentLoaded', async () => {
  let interval;
  let rejectFn;

  async function startProgress() {
    const progressBar = document.getElementById('progress-bar');
    return new Promise((resolve, reject) => {
      rejectFn = reject;
      let width = 0;

      interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          resolve('ok');
        } else {
          width += Math.max(1, Math.round(3 * Math.random()));
          progressBar.style.width = width + '%';
        }
      }, 100);
    });
  }

  function stopProgress() {
    clearInterval(interval);
    rejectFn('canceled');
  }

  document.getElementById('start-button').onclick = async () => {
    let res;
    try {
      res = await startProgress();
      alert(`Результат выполнения: ${res}`);
    } catch (error) {
      alert(`Отменено: ${error}`);
    }
  };

  document.getElementById('stop-button').onclick = () => {
    stopProgress();
  };
});
