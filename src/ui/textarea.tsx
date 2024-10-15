import * as React from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"
