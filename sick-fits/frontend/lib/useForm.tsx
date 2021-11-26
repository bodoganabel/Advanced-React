import { useEffect, useState } from "react";

export default function useForm(initial:any = {}) {

  const [inputs, setinputs] = useState(initial);

  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setinputs(initial)
  }, [initialValues])


  function handleChange(e) {
    const { name, type, value } = e.target;
    let parsedValue: string | number | File;
    if (type === 'number') {
      parsedValue = parseInt(value, 10);
    } else if (type === 'file') {
      [parsedValue] = e.target.files;
    } else {
      parsedValue = value;
    }
    
    setinputs({
      ...inputs,
    [name]: parsedValue
    });
  }

  function resetForm() {
    setinputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setinputs(blankState);
  }

  return {inputs, handleChange, resetForm, clearForm}

}