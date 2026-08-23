import type { ReactNode } from "react"
import { Link } from "react-router-dom";

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
  const baseClassName = `
    py-14 px-20
    lg:py-18 lg:px-24
    rounded-lg lg:rounded-xl
    cursor-pointer
    ${className ?? ""} `;
    
  if (href) {
    return (
      <Link
        to={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClassName}
        onClick={onClick}
      >
        {icon}
        {content}
      </Link>
    )
  }

  return (
    <button className={`py-14 px-20 lg:py-18 lg:px-24 rounded-lg lg:rounded-xl cursor-pointer ${className}`} onClick={onClick}>
      {icon}
      {content}
    </button>
  )
}

export default Button