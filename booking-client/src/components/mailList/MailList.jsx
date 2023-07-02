import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send</span>
      <div className="mailInputContainer">
        <input type="text" className="" placeholder="Your Email" />
        <button>subscribe</button>

      </div>
    </div>
  )
}

export default MailList