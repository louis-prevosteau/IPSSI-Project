const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + '/../../uploads/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
})


module.exports = folderName => {
    
    return multer({
        storage: storage, 
        fileFilter: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            if (
                ext !== ".png" &&
                ext !== ".jpg" &&
                ext !== ".jpeg"&&
                ext !== ".gif"
            ) {
                return cb(new Error("Only images are authorised!"))
            }
            return cb(null, file.originalname + ext)
        } ,
        //dest: `public/uploads/${folderName}/`
        dest: `${folderName}/`
    })

}
