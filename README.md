# electron-setup-series

## How to install dependencies

```bash
yarn install
```

## How to run application

```bash
yarn start
```

## How to packing application on Linux distro.

```bash
sudo pacman -S dpkg rpm
yarn add --dev @electron-forge/cli
npx electron-forge import
yarn run make
cd out/make
ls
```

