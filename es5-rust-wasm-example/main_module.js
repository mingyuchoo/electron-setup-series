import { add, default as init } from './wasm/wasm_bindgen_minimal_example.js';
async function run() {
	await init('./wasm/wasm_bindgen_minimal_example_bg.wasm');
	const result = add(1, 2);
	console.log(`1 + 2 = ${result}`);
	if (result !== 3) {
		throw new Error("wasm addition doesn't work!");
	}
}
run();