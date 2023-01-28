<p align="center">
  <a href="https://github.com/mingyuchoo/electron-setup-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/electron-setup-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/electron-setup-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/electron-setup-series?color=appveyor" /></a>
</p>

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

