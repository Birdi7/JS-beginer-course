import React from 'react'
import { useFormContext } from 'react-hook-form'
import { InputError, InputWrapper, StyledInput } from './Input.styles'

function Input({ name, validation, label, ...rest }) {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  return (
    <InputWrapper>
      <label>
        {label && <div>{label}</div>}
        <StyledInput
          error={errors[name]}
          {...rest}
          {...register(name, {
            validate: validation
          })}
        />
        {errors[name]?.message && <InputError>{errors[name].message}</InputError>}
      </label>
    </InputWrapper>
  )
}

export default Input
