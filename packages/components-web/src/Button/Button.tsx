import React from 'react'
import { default as BaseButton } from '@mui/material/Button'

export const Button = ({ onClick, label }: Props) => {
  return (
    <BaseButton variant="outlined" onClick={onClick}>
      {label}
    </BaseButton>
  )
}

type Props = {
  onClick: () => void
  label: string
}
