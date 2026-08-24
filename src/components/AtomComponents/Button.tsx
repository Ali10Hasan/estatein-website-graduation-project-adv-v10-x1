import type { ReactNode } from "react"

interface ButtonProps {
  content: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: "_blank" | "_self"
}

const Button = ({
  content,
  icon,
  className,
  onClick,
  href,
  target = "_self",
}: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={className}
        onClick={onClick}
      >
        {icon}
        {content}
      </a>
    )
  }

  return (
    <button className={`py-18 px-24 rounded-xl cursor-pointer ${className}`} onClick={onClick}>
      {icon}
      {content}
    </button>
  )
}

export default Button