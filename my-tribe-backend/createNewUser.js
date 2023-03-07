export const createNewUser = (req, res, db) => {
    const { body } = req
    const { username, password } = body

    // Query SQL database and add username and password
    if (username && password) {
        db.query(`INSERT INTO public.testtable (UserName, Password) VALUES ('${username}', '${password}')`)
    }

    // Display message on broswer at http://localhost:8080/newuser
    res.send(`Added new user to database!`)

    // Display message on console that the endpoint has been reached
    console.log('Endpoint hit!')
};