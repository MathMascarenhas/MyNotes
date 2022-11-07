import './note.css'

export function Note ({ text, date }) {
return (  <div className="note">
        <span>{text}</span>
        <div className='note-footer'>
        <span className='date'>{date}</span>
        </div>
    </div>)
}