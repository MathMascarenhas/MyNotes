import './note.css'

export function Note ({ text, date }) {
return (  <div className="note">
        <span>{text}</span>
        <div className='note-footer'>
        <smaller className='date'>{date}</smaller>
        </div>
    </div>)
}