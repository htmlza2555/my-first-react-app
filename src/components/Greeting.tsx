import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
}

const Greeting = ({ name }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{name}</p>
    </div>
  )
}

export default Greeting
