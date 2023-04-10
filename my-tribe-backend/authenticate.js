export const authenticateUser = (req, res, db) => {
    const { body } = req
    const { username, password } = body
    // let users
    
    // See if user exists in database
    db.query(`SELECT * FROM 'testtable' WHERE UserName='${username}' AND Password='${password}'`), (error, results, fields) => {
        if (error) {
            res.send({
                error: 'Sorry your login credentials are invalid.',
                successful: false
            })
            throw error;
        } else {
            res.send({
                authorize: 'access-token',
                successful: true,
            })
        }
        console.log('results:',results)
        console.log('fields',fields)
    }
}
