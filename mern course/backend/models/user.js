import mongoose    from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true

    },
    phone : {
        type : String,
        default : "NOT GIVEN"
    },
    isBlocked : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        default : "user"
    },
    isEmailVerified : {
        type : Boolean,
        default : false
    },
    image : {
        type : String,
        default : "https://www.google.com/search?sca_esv=35e13a49b6403f13&sxsrf=AE3TifNTWgAxf3fFuFfrh3-vVf7XfMaY_A:1765260263915&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOhYPURIv2wPgv_w_sE_0Sc6Q2Uz8zlVUFOE6tcDqfo9WH4knGBRCDKe5V46SKHslfGhsHdNfQp1KhmDDC-UukYVGl2R6Bujlr81TsZDSIAKD_PlJIE_TGU8ji42VnZfSFpBAL4yA&q=simple+user+image+url&sa=X&ved=2ahUKEwiR0N336q-RAxVuRmwGHX35AdQQtKgLegQIFBAB&biw=1366&bih=633&dpr=1#sv=CAMSVhoyKhBlLVMwOWREOXc5U2RtQ3BNMg5TMDlkRDl3OVNkbUNwTToORWF6N2UxRTNZaFBZOE0gBCocCgZtb3NhaWMSEGUtUzA5ZEQ5dzlTZG1DcE0YADABGAcgzozRxAMwAkoKCAEQAhgCIAIoAg"

    }

})

const User = mongoose.model("users", userSchema)

export default User;
