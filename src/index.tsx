import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

const rootContainer = document.querySelector('#root_container');

if (rootContainer) {
	const root = createRoot(rootContainer);
	root.render(<App />);
} else {
	throw new Error('root_container not found');
}
