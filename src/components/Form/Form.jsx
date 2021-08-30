import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'
import { greaterThan, required } from './validations'
import { FormWrapper } from './Form.styles'
import Button from '../Button/Button'

function Form({ onSubmit }) {
  const methods = useForm()

  return (
    <FormWrapper>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((values) => {
            if (onSubmit) onSubmit(values)
          })}
        >
          <Input
            type="text"
            name="name"
            label="Name"
            validation={{
              required: required('Name is required')
            }}
          />
          <Input
            name="age"
            label="Age"
            type="number"
            validation={{
              required: required('Age is required'),
              greater18: greaterThan(18, 'You must be greater than 18 yaers old')
            }}
          />
          <Button type="submit">Start game</Button>
        </form>
      </FormProvider>
    </FormWrapper>
  )
}

export default Form
