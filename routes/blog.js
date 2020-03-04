var  router = require('koa-router')();

router.prefix('/api/blog');

router.get('/list', async (ctx,next) => {
    ctx.body = {
        errnum : 0,
        data: [123,456]
    }
})

module.exports = router