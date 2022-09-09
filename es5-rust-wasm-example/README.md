# es5-rust-wasm-example

## Rust setup

```sh
rustup target add wasm32-unknown-unknown
cargo install  wasm-bindgen-cli
```

## Yarn setup

Install Node.js & Yarn

```sh
cd es5-rust-wasm-example
yarn install
```

## Build the Rust code into WASM

```sh
build.sh
```

## Run the app during development

```sh
yarn start
```

