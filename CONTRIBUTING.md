Thank you so much for contributing to [Swiftransact](https://www.swiftransact.io/)! Please add your name to this file when you get started. :)

## Contributor Agreement

By contributing to this project you agree to:

1. Abide by Swiftransact's [Code of Conduct](https://github.com/swiftransact/swiftransact.io/blob/main/CODE_OF_CONDUCT.md).
2. Assign the copyright of your code contributions to Swiftransact, who commits to acting as a good steward for the codebase for public benefit.

## 💥 How to Contribute

- Take a look at the existing [Issues](https://github.com/swiftransact/swiftransact.io/issues) or [create a new issue](https://github.com/swiftransact/swiftransact.io/issues/new)!
- [Fork the Repo](https://github.com/swiftransact/swiftransact.io/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/swiftransact/swiftransact.io/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR if necessary.

---

## ⭐ HOW TO MAKE A PULL REQUEST:

**1.** Start by making a Fork of the [**Swiftransact**](https://github.com/swiftransact/swiftransact.io) repository. Click on the <a href="https://github.com/swiftransact/swiftransact.io/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/swiftransact.io
```

**3.** Navigate to the newly created Swiftransact project directory:

```bash
cd swiftransact.io
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/swiftransact/swiftransact.io.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

> Instead, stage your changes for each file/folder
>
> By using src path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add src
```

_or_

```bash
git add "<files_you_have_changed>"
```

**9.** Commit your changes:

```bash
git commit -m "<your_commit_message>"
```

**10.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**12.** **Congratulations!** You've made your first contribution to [**Swiftransact**](https://github.com/swiftransact/swiftransact.io/graphs/contributors)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the Swiftransact project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

---

## Run automated tests

After making changes make sure that tests passes

**1.** Start the Swiftransact application by typing this command:

```bash
yarn start
```

**2.** Perform the tests by typing this command:

```bash
yarn test
```

---

## Style Guide for Git Commit Messages :memo:

**How you can add more value to your contribution logs:**

- Use the present tense. (Example: "Add feature" instead of "Added feature")
- Use the imperative mood. (Example: "Move item to...", instead of "Moves item to...")
- Limit the first line (also called the Subject Line) to _50 characters or less_.
- Capitalize the Subject Line.
- Separate subject from body with a blank line.
- Do not end the subject line with a period.
- Wrap the body at _72 characters_.
- Use the body to explain the _what_, _why_, _vs_, and _how_.
- Reference [Issues](https://github.com/swiftransact/swiftransact.io/issues) and [Pull Requests](https://github.com/swiftransact/swiftransact.io/pulls) liberally after the first line.

---

## 💥 Issues

In order to discuss changes, you are welcome to [open an issue](https://github.com/swiftransact/swiftransact.io/issues/new/choose) about what you would like to contribute. Enhancements are always encouraged and appreciated.

## All the best! 🥇

[![built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://www.swiftransact.io/)

## Contributor Signatures

- Obiorah Ignatius
-