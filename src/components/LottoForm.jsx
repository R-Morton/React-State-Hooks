import {useState} from 'react'
import LottoDisplay from './LottoDisplay'
import RandNumGen from './RandomNumGen'

export default function LottoForm(props) {
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [showDisplay, setDisplay] = useState(false)
    const [submittedName, setSubmittedName] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")
    const [lotto, setLotto] = useState(null)



    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangeEmail (event) {
        setEmail(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        setSubmittedName(name)
        setSubmittedEmail(email)
        setLotto(RandNumGen())
        setDisplay(true)
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleChangeName}></input>
                <label>Email:</label>
                <input type="text" value={email} onChange={handleChangeEmail}></input>
                <button type='submit'>Submit</button>
            </form>
            {showDisplay && <LottoDisplay name={submittedName} email={submittedEmail} lotto={lotto} />}
        </div>

    )
}