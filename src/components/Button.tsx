import React, { ButtonHTMLAttributes } from 'react'

interface ICustomInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: JSX.Element
}

export function Button({ text, icon, ...buttonProps }: ICustomInputProps) {
  return (
    <>
      <button {...buttonProps}>
        {icon}
        {text}
      </button>
    </>
  )
}
