# JS (JavaScript) Fundamentals

The purpose of this repo is to introduce some fundamentals of the JavaScript programming language. You will find 5 folders, each introducing a new feature of the language.

## Pre-requisites

- Node.js installed on your machine: you can download it [here](https://nodejs.org/en/download/)
- A code editor (e.g. Visual Studio Code): you can download it [here](https://code.visualstudio.com/download)
- Git installed on your machine: you can download it [here](https://git-scm.com/downloads)

## Using Nodemon to run javascript files (files with the .js extension)

Nodemon is a utility that will monitor for any changes in your source .js file and automatically restart your server (re-run your .js file after you make/save any changes). Perfect for development. It enables us to run JavaScript files without needing to restart the server manually.

### Nodemon Installation

#### Installing Nodemon Globally

You can install Nodemon globally on your computer by running the following command:

```bash
npm install -g nodemon
```

Mac users may need to use `sudo`:

```bash
sudo npm install -g nodemon
```

#### Installing Nodemon in you project

In order to use Nodemon in your project, you must first generate a package.json file by running the following command at the root of your project:

```bash
npm init -y
```

Then, you can install Nodemon as a dev dependency in your project by running the following command:

```bash
npm install --save-dev nodemon
```

#### Using Nodemon with NPX(recommended)

You can also use Nodemon without installing it globally or as a prject dependency by using `npx`. `npx` is a package runner tool that comes with npm 5.2+.

```bash
npx nodemon <path-to-file>
```

#### Example Nodemon Usage

Let's use the `week1` folder as an example. The `week1` folder contains the following example files:

- `comments.js`
- `variable-declaration.js`
- `data-types.js`

##### Running Nodemon from the root of your project(outside the project sub-folders)

To run the `comments.js`file within the week1 folder with Nodemon from the root of your project, use the following command:

```bash
npx nodemon week1/comments.js
```

This command will start Nodemon and monitor the `comments.js` file for any changes. If you make any changes to `comments.js`, Nodemon will automatically restart the script.

To stop Nodemon, press `Ctrl + C` in the termanal.

You can do the same for the other files:

```bash
npx nodemon week1/variable-declaration.js
```

```bash
npx nodemon week1/data-types.js
```

##### Running Nodemon from within a project sub-folder

To run `comments.js` with Nodemon from within the `comments.js` parent folder (week1):

navigate to the `week1` folder by running the following command from the root of your project:

```bash
cd week1
```

Then run the following command:

```bash
npx nodemon comments.js
```

This command will start Nodemon and monitor the `comments.js` file for any changes. If you make any changes to `comments.js`, Nodemon will automatically restart the script.

To stop Nodemon, press `Ctrl + C` in the termanal.

You can do the same for the other files (from within the `week1` folder):

```bash
npx nodemon variable-declaration.js
```

```bash
npx nodemon data-types.js
```

The main difference between running Nodemon from the root of your project and from within a project sub-folder is the path you provide to the file you want to run. The nodemon command remains the same:

```bash
npx nodemon <path-to-file>
```
