interface TitleProps {
  text: string
}

export const Title = ({ text }: TitleProps) => {
  return (
    <h3>{text}</h3>
  )
}