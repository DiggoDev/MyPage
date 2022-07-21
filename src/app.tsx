import React, { Component } from 'react';

export interface AppProps {}
export interface AppStates {}


export default class App extends Component<AppProps, AppStates> {
	public constructor(props: AppProps) {
		super(props);
	}
	public render() {
		return <div><span>Hello world</span></div>
	}
}