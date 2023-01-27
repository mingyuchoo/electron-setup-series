# es5-rust-wasm-example

## Rust setup

```bash
rustup target add wasm32-unknown-unknown
cargo install  wasm-bindgen-cli
```

## Yarn setup

Install Node.js & Yarn

```bash
cd es5-rust-wasm-example
yarn install
```

## Build the Rust code into WASM

```bash
build.sh
```

## Run the app during development

```bash
yarn start
```

