const sizes = {
    mobileS: '320px',
    mobileL: '480px',
    tablet: '768px',
    laptop: '1024px',
}

export const device = Object.keys( sizes )
.reduce( ( acc, key ) => {
    acc[ key ] = `(min-width: ${sizes[key]})`
    return acc
}, {} )
