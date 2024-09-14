# Build Instructions

To create a build of your TypeScript code for deployment, use the following command:

```sh
npm run build
```

To add package.json and package-lock.json, use the following command:

```sh
npm run postbuild
```

To create build for sam cli, use the follwing command:

```sh
npm run sam:build
```

To run sam build locally, use the follwing command:

```sh
npm run sam:local
```

To run sam deploy sam build, use the follwing command:

```sh
npm run sam:deploy
```

## or

use the follwing command to do all the above things to deploy api:

```sh
npm run api:deploy
```

## To create build for sam cli, use the follwing command:

Note: The commands provided are set up for Windows systems. For Linux/macOS systems, some adjustments are needed:
for windows we have .bat file and for the linux/mac we have .sh file

## Windows System

Batch File (.bat): Use the .bat file for Windows systems. In the package.json, use "call" to run the .bat file based on the directory.

```json
"scripts": {
  "build": "call ./scripts/build.bat"
}

```

File Copy Command: Use xcopy to copy files in the .bat file.

```bat
xcopy /s /e source\* destination\
```

### Example

```bat
xcopy package.json dist\
```

---

## Linux/macOS System

Shell Script (.sh): Use the .sh file for Linux/macOS systems. There is no need to use "call" in the package.json.

```json
"scripts": {
  "build": "./build.sh"
}
```

File Copy Command: Use cp to copy files in the .sh file.

```sh
cp -r source/* destination/
```

### Example

```sh
cp package*.json dist\
```
