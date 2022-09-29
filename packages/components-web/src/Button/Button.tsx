import { default as BaseButton } from '@mui/material/Button'

export const Button = ({ onClick, label }: Props) => {
  return (
    <div>
      <BaseButton variant="outlined" onClick={onClick}>
        {label}
      </BaseButton>
    </div>
  )
}

type Props = {
  onClick: () => void
  label: string
}
