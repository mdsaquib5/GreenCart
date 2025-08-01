import jwt from 'jsonwebtoken';


const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({success: false, message: 'Not Authorized'});
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            // Initialize req.body if it doesn't exist (for GET requests)
            if (!req.body) {
                req.body = {};
            }
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success: false, message: 'Not Authorized'});
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.json({success: false, message: error.message});
    }
}


export default authUser;



// try {
//     const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
//     if (tokenDecode.id) {
//         req.body.userId = tokenDecode.id;
//     }else{
//         return res.json({success: false, message: 'Not Authorized'});
//     }
//     next();
// } catch (error) {
//     console.log(error.message);
//     return res.json({success: false, message: error.message});
// }