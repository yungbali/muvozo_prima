import * as React from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
