import koa from 'koa'
import appRouter from 'server/router'
import appStatic from 'server/static'

export default ( PORT ) => {

    const app = new koa()

    appStatic( app )
    appRouter( app )

    return app.listen( PORT, () => {
        console.log( 'App running on port:', PORT )
    } )

}
