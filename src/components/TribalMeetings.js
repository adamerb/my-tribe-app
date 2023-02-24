const TribalMeetings = () => {
    return (
        <section>
            <h3>Tribe Meetings</h3>
            <p><strong>Next meeting location and time:</strong>TBD; Wednesday, March 1, 2023</p>
            <p>This drop down will hold dates of previous meetings...</p>
            <p>Each meeting will have a description of something memorable/funny from the meeting.</p>
            <form readOnly id='meeting-search'>
                <select readOnly>
                    <option>Select A Date</option>
                    <option>2/8/22</option>
                    <option>2/15/22</option>
                    <option>2/22/22</option> 
                    <option>2/28/22</option>
                    <option>3/1/22</option>
                    <option>3/8/22</option>
                </select>
            </form>
            <button value='Search'>Search</button>
        </section>
    )
}

  export default TribalMeetings;