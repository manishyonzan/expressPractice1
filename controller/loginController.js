const loginRepository = require("../repository/loginRepository");

const loginController = async (req, res) => {
    try {
        const response = await loginRepository.getLogin();
        res.status(200).send(response);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            error: "internal server error",
        })

    }

}

module.exports = { loginController };