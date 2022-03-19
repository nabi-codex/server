module.exports = ((req, res, next) => {
    let offset = parseInt(req.query.offset) || 0
    let limit = parseInt(req.query.limit) || 25
    let order = req.query.order || 'DESC' // ASC,DESC

    req.mParams = {offset, limit, order}
    next()
})
