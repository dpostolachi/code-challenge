import serve from 'koa-static'
import mount from 'koa-mount'
import etag from 'koa-etag'
import conditional from 'koa-conditional-get'
import path from 'path'

const maxAge = 1000 * 60 * 60 * 24 * 31

const appStatic = serve( path.join( __dirname, '../static' ), {
    maxage: maxAge,
    gzip: true,
} )

export default ( app ) => {

    return app.use( etag() )
    .use( conditional() )
    .use( mount( '/', appStatic ) )

}
