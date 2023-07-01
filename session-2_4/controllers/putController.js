function handlePutRequest(req, res) {
    res.send('This is a simple put request');
}

function handleCreateUserRequest(req, res) {

    /**email , password */

    try {

        const { email, password } = req.body;

        if (email) {
            console.log('Email Provided');
        } else {
            return res.send('Email not provided');
        }

        if (password) {
            console.log('Password Provided');
        } else {
            return res.send('Email is provided, but password was not provided');
        }

        console.log(email, password);

        return res.send('User has been created')

    } catch (err) {

        console.log(err);
        return res.send(err);

    }
}

export { handlePutRequest, handleCreateUserRequest };