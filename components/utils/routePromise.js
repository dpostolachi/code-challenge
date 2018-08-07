import React, { createContext } from 'react'

/*
	Used to collect fetch promises on backend and to resolve them
*/

const RoutePromise = createContext( {
	// An array of promises to be resolved on backend before render
	promises: [],
} )

export const RoutePromiseProvider = RoutePromise.Provider

export const WithRoutePromises = ( Component ) => {
	return ( props ) => {
		return (
			<RoutePromise.Consumer>
			{
				( promises ) => {
					return <Component { ...props } { ...promises } />
				}
			}
			</RoutePromise.Consumer>
		)
	}
}
