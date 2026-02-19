import './styles.css';
import { useState } from 'react';
import { HelloWorldDialog } from '../components/hello-world-dialog';

export const App = () => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <div className="card">
        <button onClick={() => setOpen(true)}>Открыть модальное окно</button>
      </div>
    );
  }

  return <HelloWorldDialog open={open} onClose={() => setOpen(false)} />;
};
