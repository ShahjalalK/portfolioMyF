


import { useEffect, useState } from 'react';
import Looding from './Looding/Looding';
import SetAllPage from './SetAllPage';

function App() {
  const [looding, setLooding] = useState(false)
  useEffect(() => {
    setLooding(true)
   setTimeout(() => {
      setLooding(false)
   }, 2500)
  }, [])
  return (
    <>
    {looding ? <Looding /> : 
      <SetAllPage />
    }     

    </>
  );
}

export default App;
