import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [subject, setSubject] = useState('Enter the subject here');
    const [message, setMessage] = useState('Enter your message here');
    const [sender, setSender] = useState('');
    const [isPending, setIsPending] = useState(false);    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactform = { subject, message, sender};
        console.log(contactform)

        // setIsPending(true);

        // save in textfile later on submit event? 
        // enter submit data
        // setisPending(false); // after submitting
        {navigate('/')}
    }

    return (  
        <div className="contact">
          <h2>Contact form</h2>  
          <form onSubmit={handleSubmit}>
              <label>Subject:</label>
              <input
                type='text'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
                <label>Message:</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label>Sender:</label>
              <select
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                >
                  <option value='menno'>Menno</option>
                  <option value='emiel'>Emiel</option>
              </select>
              { ! isPending && <button>Send message</button>}
              { isPending && <button disabled>Sending message...</button>}
              <p>{ subject }</p>
              <p>{ message }</p>
              <p>{ sender }</p>
          </form>
        </div>
    );
}
 
export default Contact;