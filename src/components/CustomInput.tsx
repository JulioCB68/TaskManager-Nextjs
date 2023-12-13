import { InputHTMLAttributes } from 'react'

interface ICustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function CustomInput({ label, ...inputProps }: ICustomInputProps) {
  return (
    <div className="h-full w-full">
      {label && (
        <label className="mb-2 mt-8 block font-bold" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-5 leading-tight text-gray-700 shadow focus:outline-none"
        {...inputProps}
      />
    </div>
  )
}
