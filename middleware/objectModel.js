const {lang ,order} = require('../models')

const models = {lang ,order }

module.exports = ((req, res, next) => {
    const {objectModel} = req.query
    if (!(objectModel && models[objectModel]))
        return res.status(400).json('bad request , table name is null .')

    req.objectModel = models[objectModel]; //getModelByKey
    next()
})

// يتم تحديد الاوبجكت حسب الجدول الخاص به
// في حالة كان الاوبجكت فارغ او غير موجود يتم رفض الطلب