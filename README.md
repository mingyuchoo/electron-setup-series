# electron-setup-series

## How to install dependencies

```sh
yarn install
```

## How to run application

```sh
yarn start
```

## How to packing application on Linux distro.

```sh
sudo pacman -S dpkg rpm
yarn add --dev @electron-forge/cli
npx electron-forge import
yarn run make
cd out/make
ls
```

