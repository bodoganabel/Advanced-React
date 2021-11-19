import useForm from 'lib/useForm';
import React, { useState } from 'react'
import Form from 'components/styles/Form';
export default function CreateProduct() {

  const [name, setname] = useState('')

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'TestName',
    price: 3400,
    description: 'Test description',
  });

  return (
    <Form>
      <fieldset aria-busy>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" value={inputs.name} onChange={handleChange}/>
      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" placeholder="price" value={inputs.price} onChange={handleChange}/>
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" placeholder="description" value={inputs.description} onChange={handleChange} />
      
      <button type="submit">+ Add Product</button>
      <button type="button" onClick={clearForm}>Clear Form</button>
      <button type="button" onClick={resetForm}>Reset Form</button>

      </fieldset>
    </Form>
  )
}
