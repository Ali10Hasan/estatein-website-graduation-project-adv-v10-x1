import type { ReactNode } from "react"
interface ButtonProps{
    content :string
    icon? : ReactNode
    className? : string
    onClick?: () => void 
}
const Button = ({content , icon , className , onClick }: ButtonProps
) => {
  return (
    <button className={className}  onClick={onClick}>
    {icon}{content}
    </button>
  )
}

export default Button
