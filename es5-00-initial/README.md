# es5-00-initial

## Dependencies

- elelctron
- @electron-forge/cli

## How to install modules

```sh
yarn install
rm -rf node_modules
yarn install --offline
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

## References

- <https://www.electronjs.org/docs/tutorial/quick-start#create-a-basic-application>
