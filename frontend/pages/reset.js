import Reset from '../components/Reset'
const Sell = props =>  (
  <div>
    <p>Reset your password {props.resetToken}</p>
    <Reset resetToken={props.resetToken}/>
  </div>
)
export default Sell;