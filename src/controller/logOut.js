

module.exports.logOut = async(req, res) => {
    try{
        // JsonWebTokenError.destroy(token)
    }catch(err){
        return res.status(500).json(err.message);
    }
};