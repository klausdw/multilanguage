import * as gtag from '../lib/gtag'

export const addTest = () => {
	gtag.event({
		action: 'go_to_test',
		category: 'home',
		label: 'Go to test page',
		value: 1,
	})
}
// <button onClick={() => addTest()}>Test</button>
