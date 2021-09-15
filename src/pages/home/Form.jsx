import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Input from '../../components/ui/input/Input'
import { greaterThan, required } from '../../utils/validations'
import { FormWrapper } from './Form.styles'
import Button from '../../components/ui/button/Button'
import { setUserAction } from '../../store/user/user.actions'

function Form() {
  const methods = useForm()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(
      setUserAction({
        name: values.name,
        age: values.age
      })
    )
    history.push('/game')
  }

  return (
    <FormWrapper>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
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
