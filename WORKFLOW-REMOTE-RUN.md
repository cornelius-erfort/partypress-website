# Remote compute workflow (local dev + server run)

Brief description for AI agents and collaborators: how to keep code in sync and run heavy jobs on a remote server while developing locally.

## Principle

- **Code**: Developed and versioned **locally** (and on GitHub). Single source of truth.
- **Runs**: Executed on the **remote server** after pulling from GitHub.
- **Data**: Large inputs/outputs are **not** in Git; use `rsync`/`scp` to move them between local and server.

## 1. One-time: Git auth on the server

- Create a GitHub **Personal access token** (classic) with **repo** scope:  
  https://github.com/settings/tokens
- On the server, set the remote so pull/push use the token (replace `USER`, `TOKEN`, `OWNER`, `REPO`):

  ```bash
  ssh -p PORT USER@HOST 'cd ~/REPO_DIR && git remote set-url origin "https://USER:TOKEN@github.com/OWNER/REPO.git"'
  ```

  Or use the credential helper: store `https://USER:TOKEN@github.com` in `~/.git-credentials` on the server and run `git config --global credential.helper store`.

## 2. Before running on the server

- **Local**: Commit and push to GitHub.
- **Server**: Pull latest code:

  ```bash
  ssh -p PORT USER@HOST 'cd ~/REPO_DIR && git pull'
  ```

## 3. Run the job on the server

- SSH in and run your script, or run a one-liner:

  ```bash
  ssh -p PORT USER@HOST 'cd ~/REPO_DIR && Rscript path/to/script.R'
  ```

- If the server has local changes that block `git pull`, stash first:  
  `git stash push -m "server local" && git pull`

## 4. After the run: get output data back

- From your **local** machine, pull results from the server (replace paths and connection details):

  ```bash
  rsync -avz -e "ssh -p PORT" USER@HOST:/path/on/server/results/ ./results/
  ```

  Or with `scp` for single files:

  ```bash
  scp -P PORT USER@HOST:/path/on/server/results/file.RData ./results/
  ```

## Summary for agents

- **Code**: Edit locally; sync via Git (push local → GitHub → pull on server).
- **Run**: SSH to server, `git pull`, then run the command (e.g. `Rscript ...`).
- **Data**: Copy outputs server → local with `rsync` or `scp`; do not commit large data to Git.
- **Token**: Stored on the server (remote URL or `~/.git-credentials`); never commit tokens to the repo. User provides token; agent uses it only for server setup.
