import React, { PureComponent } from 'react'
import styled from 'styled-components'


const Preloader = styled.div`
    display: block;
    height: ${ props => ( props.height ) ? `${props.height}px` : '100px' };
    width: ${ props => ( props.width ) ? `${props.width}px` : '100px' };
    background: #E0E0E0;
    display: inline-block;
    vertical-align: middle;
    > img {
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
`

export default class LazyImage extends PureComponent {

    constructor ( props ) {

        super( props )

        const { src } = props

        this.state = {
            loaded: false,
            src: null,
        }

        this.Image = null



    }

    componentDidMount () {

        const { image } = this.props
        this.updateImage( image )

    }

    updateImage( src ) {

        this.Image = new Image()
        this.Image.onload = ( e ) => {
            this.setState( {
                loaded: true,
                src: src,
            } )
        }
        return this.Image.src = src

    }

    componentWillUnmount () {
        this.Image.onload = null
    }

    componentDidUpdate( prevProps, prevState ) {

        const { image } = this.props
        if ( prevProps.image !== image ) {
            this.updateImage( image )
        }

    }

    render () {

        const title = this.props.title || ''
        const { loaded, src } = this.state

        return (
            <Preloader { ...this.props }>
                { ( loaded ) ? <img src={ src } alt={ title } title={ title } /> : null }
            </Preloader>
        )
    }

}
