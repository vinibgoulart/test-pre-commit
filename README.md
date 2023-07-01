# test-pre-commit

run tests related to files changed and tracked by git in pre-commit

make sure the tests related to the files you changed will run and not fail

### tags
- jest
- pre-commit
- typescript


## How its works

when running the commit to git, the test script will be run before committing. 

the script searches if the modified file is a test or has tests in its directory, if true it runs the related tests

## How to test

Clone the project

```bash
  git clone https://github.com/vinibgoulart/test-pre-commit.git
```

Go to the project directory

```bash
  cd test-pre-commit
```

Install dependencies

```bash
  pnpm install
```

after that you can change a test file, or a file that has the `__tests__` folder in your directory

you can test by giving a git commit, or simulate lint-staged by running:

```bash
npx ts-node ./scripts/runPathTests.ts
```