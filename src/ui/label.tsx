import * as React from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={className}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"

export { Label }
