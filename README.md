<p align="center">
    <h1 align="center">Dyner (backend)</h1>
</p>
<p align="center">
    <em><code>❯ Decide where to go easily </code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/luancardoso35/Dyner-backend?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/luancardoso35/Dyner-backend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/luancardoso35/Dyner-backend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/luancardoso35/Dyner-backend?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Repository Structure](#-repository-structure)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
    - [ Tests](#-tests)
- [ Contributing](#-contributing)

---

##  Overview

<code>❯ This app allows two or more users to receive a list of restaurants and vote on their preferences. The restaurants that receive mutual votes are suggested to the users for their next dining experience.</code>

---

##  Repository Structure

```sh
└── Dyner-backend/
    ├── README.md
    ├── jest.config.ts
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── dev.db
    │   ├── migrations
    │   ├── schema.prisma
    │   └── seed.ts
    ├── src
    │   ├── dao
    │   ├── index.ts
    │   ├── mail
    │   ├── modules
    │   ├── repositories
    │   └── routes
    ├── tsconfig.json
    └── vercel.json
```
---

##  Getting Started

###  Installation

Build the project from source:

1. Clone the Dyner-backend repository:
```sh
❯ git clone https://github.com/luancardoso35/Dyner-backend
```

2. Navigate to the project directory:
```sh
❯ cd Dyner-backend
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command (after building):

```sh
❯ npm run start
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm run test
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/luancardoso35/Dyner-backend/issues)**: Submit bugs found or log feature requests for the `Dyner-backend` project.
- **[Submit Pull Requests](https://github.com/luancardoso35/Dyner-backend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/luancardoso35/Dyner-backend/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/luancardoso35/Dyner-backend
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/luancardoso35/Dyner-backend/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=luancardoso35/Dyner-backend">
   </a>
</p>
</details>

---
