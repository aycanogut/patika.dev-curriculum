import { useState, useEffect } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  // unmount kullanimi

  useEffect(() => {
    console.log('counter mounted');

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    // useEffect'in hemen sonunda, dependency array oncesinde clearInterval fonksiyonunu return ederek DOM uzerinden silinmis olan componentlerin state yenileme ozelligini kapatabiliyoruz.
    return () =>  {
    console.log('component unmounted');
    clearInterval(interval)}; // tanimladigimiz sabiti arguman olarak fonksiyona gectik
  }, []);

  return (
    <div>
      <br />
      <hr />
      <h1>Component Mount</h1>
      <h1>{number}</h1>
    </div>
  )
}

export default Counter;
