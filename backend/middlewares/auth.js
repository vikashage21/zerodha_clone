import jwt from 'jsonwebtoken';


export const auth = async (req, res, next) => {
    try {

        //  receiving the token from header

        const token = req.headers.authorization.split(" ")[1]

        // console.log(token)

        //  now check token matches or not
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET_TOKEN
        )

        req.user = decodedToken;

        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });

    }

}