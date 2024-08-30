module.exports = {
    getTasks : (req,res) => {
        console.log("request data: ", req.query);
        try {
            return res.send(req.query);
        }
        catch (error) {
            return res.send(error.message)
        }
    },
    createTask : (req,res) => {
        try {
            return res.send({
                message : "my post request",
                // data : "data"
                data : req.body
            })
        } catch (error) {
            return res.send(error.message)
        }
    },
    updateTask: (req,res) => {
        try {
            return res.send({
                message:"this request is to update task",
                data : req.body
            }
            )
        } catch (error) {
            return res.send(error.message);
        }
    },
    deleteTask : (req,res) => {
        try{
            return res.send({
                message:"delete task request",
                data:req.query,
            })
        }
        catch(error){
            return res.send(error.message)
        }
    }
} 