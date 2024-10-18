<a id="readme-top"></a>

![GitHub contributors](https://img.shields.io/github/contributors/giovanniBombardieri/Moove)
![Github issues](https://img.shields.io/github/issues/giovanniBombardieri/Moove)
![GitHub forks](https://img.shields.io/github/forks/giovanniBombardieri/Moove?style=flat)
![Github stars](https://img.shields.io/github/stars/giovanniBombardieri/Moove?style=flat&color=%23EF2D5E)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giovanni-bombardieri-13ba7021b/)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GiovanniBombardieri/Moove">
    <img src="img/bicycle.ico" alt="Logo-Moove" width="80" height="80">
  </a>

  <h3 align="center">MOOVE</h3>

  <p align="center">
    A TypeScript system that models the organizational structure of Moove, an innovative shared micromobility service, focusing on the interactions between users, means of transport and the cities served.
    <br />
    <br />
    <a href="https://github.com/GiovanniBombardieri/Moove">View Demo</a>
    ·
    <a href="https://github.com/GiovanniBombardieri/Moove/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/GiovanniBombardieri/Moove/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#scripts">Scripts</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

### Final exam for Start2Impact's TypeScript course

This project aims to develop a system in TypeScript that models the organizational structure of Moove, an innovative shared micromobility service, focusing on the interactions between users, means of transport and the cities served.

### Project structure

The project consists of the following interfaces and classes:

- **Vehicle**: Manages the information of each vehicle and the assignment to users.
- **User**: Manages user information and their ability to book vehicles.
- **City**: Represents a specific city where Moove operates, managing the available vehicles and the addition of new vehicles.

<!-- BUILT WITH -->

### Built With

- ![typescript](./img/typescript20x20.png) TypeScript

<p align="right">(<a href="#start">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run this project, you need to have Node.js and npm installed on your machine.

### Prerequisites

- Node.js

  ```sh
  npm install node@latest -g
  ```

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

You also need TypeScript installed on your machine; if TypeScript is not installed globally, you can install it using the following command:

```bash
npm install -g typescript
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Scripts

The project contains the following npm scripts:

- `dev`: This script uses `tsx` to watch for changes in your TypeScript files and automatically recompile them. It is useful for development purposes.

```bash
  npm run dev
```

<br/>
<br/>

- `build`: This script compiles the TypeScript files into JavaScript using the `tsconfig.json` configuration. It compiles `.ts` files into `.js` files in the `dist` folder. The executable file will be `index.js`.

```bash
  npm run build
```

<br/>
<br/>

- `start`: This script runs the compiled `index.js` file within `dist` folder

```bash
  npm start
```

<br/>
<br/>

And finally you can take a look on classes workflow by watching logs in the console.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Giovanni - [@linkedin](https://www.linkedin.com/in/giovanni-bombardieri-13ba7021b/) - g.bombardieri06@gmail.com

Project Link: [https://github.com/GiovanniBombardieri/Moove](https://github.com/GiovanniBombardieri/Moove)

<p align="right">(<a href="#start">back to top</a>)</p>
