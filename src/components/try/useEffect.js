import { useEffect } from 'react';

const printName = (value) => {
  console.log(value);
};

const ExampleComponent = () => {
  const name = 'Thomas';

  useEffect(() => {
    printName(name);
    console.log('change');
  }, [name, printName]);

  return <p>UseEffect!</p>;
};

export default ExampleComponent;
