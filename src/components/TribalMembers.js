import { useState } from 'react';
import UserCard from './UserCard';
import '../App.css'

const myTribe = [
  {
    name: 'Adam Erb',
    aliases: 'Erb, Adam',
    birthday: 32,
    occupation: 'Unemployed',
    bio: "Life's a garden, dig it."
  },
  {
    name: 'Benjamin Holcomb',
    aliases: 'Ben Hameen, Ben, Uncle Ben',
    birthday: 32,
    occupation: 'Software Engineer at S&P Global',
    bio: 'A handful of patience is worth more than a bushel of brains.'
  },
  {
    name: 'Tho Le',
    aliases: 'Thollami, Tho',
    birthday: 38,
    occupation: 'Software Engineer at Cognosante',
    bio: 'Music with dinner is an insult both to the cook and the violinist.'
  },
  {
    name: 'Grant Gorrell',
    aliases: 'G Money, Grant',
    birthday: 26,
    occupation: 'Client Support Manager at Brightfin',
    bio: 'I cannot pretend to feel impartial about colours. I rejoice with the brilliant ones and am genuinely sorry for the poor browns.'
  },
  {
    name: 'Chris Hagon',
    aliases: 'Chris, Chris Scott',
    birthday: 33,
    occupation: 'Entrepreneur / Self-Employed',
    bio: 'The first duty of love is to listen.'
  },
  {
    name: 'Ryland Richart',
    aliases: 'Ryelz, Ryley',
    birthday: 26,
    occupation: 'Home Energy Performance Specialist',
    bio: 'Frisbeetarianism is the belief that when you die, your soul goes up on the roof and gets stuck.'
  },
  {
    name: 'Peter Vu',
    aliases: 'Peeeta, Peter',
    birthday: 26,
    occupation: 'Aircraft Maintenance Technician at UPS',
    bio: 'Affirmations are like prescriptions for certain aspects of yourself you want to change.'
  },
  {
    name: 'Davis Moore',
    aliases: 'Davis, dmoore12',
    birthday: 30,
    occupation: 'Product Owner at S&P Global',
    bio: 'The first duty of love is to listen.'
  },
  {
    name: 'Taylor Koenig',
    aliases: 'VanillaPuddin37, Tay Tay, T-Swift',
    birthday: 26,
    occupation: 'Software Engineer',
    bio: 'Keep your face always toward the sunshine, and shadows will fall behind you.'
  },
  {
    name: 'Carlton Etienne',
    aliases: 'Carltini, Carlton',
    birthday: 34,
    occupation: 'N/A',
    bio: "Nothing is impossible. The word itself says 'I'm possible!'"
  },
] 

const sortUsers = (userList) => {
    return userList.sort((a,b) => {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
}



const TribalMembers = () => {
  const [showMembers, setShowMembers] = useState(false)

    return (
        <section id='tribal-members'>
        <h2>Tribe Members:</h2>
        <button className='show-member-btn' onClick={() => setShowMembers(!showMembers)}>{showMembers ? 'Hide Members' : 'Show Members'}</button>
        <div className='collection'>
           {showMembers && sortUsers(myTribe).map(tribeMember => <UserCard key={tribeMember.name} tribeMember={tribeMember}/>)}
        </div>
        </section>
    )
}

export default TribalMembers