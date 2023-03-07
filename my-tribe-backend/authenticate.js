export const authenticateUser = (req, res, db) => {
    const { body } = req
    const { username, password } = body
    let users
    
    // get all users from memory
    db.query('SELECT * FROM `testtable`', (error, results, fields) => {
        if (error) throw error;

        // loop through results and push each result into users array
        users = results.reduce((acc, curr) => {
            return { ...acc, [curr.UserName]: curr.Password}
        }, {})

        // check if req.username and req.password are inside our db file
        if (authenticate(username, password, users)){
            res.send({
                authorize: 'access-token',
                successful: true,
            })
        } else {
            res.send({
                error: 'Sorry your login credentials are invalid.',
                successful: false
            })  
        }
    })
};

const authenticate = (username, password, allDBUsers) => {
    for (const [key, value] of Object.entries(allDBUsers)){
        if (key == username && value == password){
          return true 
        }
    }
    return false
};