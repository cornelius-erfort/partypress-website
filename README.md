# partypress.org

Draft website for [partypress.org](https://partypress.org), hosted on GitHub Pages.

## Local preview

Open `index.html` in a browser, or use a simple server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Hosting on GitHub Pages

1. **Create the repo on GitHub**  
   Go to [github.com/new](https://github.com/new).  
   - Owner: your user or org (e.g. `orga`)  
   - Repository name: `partypress.org` (or `partypress-org`)  
   - Public, no template. Create repository.

2. **Push this folder** (from your machine):

   ```bash
   git remote add origin https://github.com/YOUR_OWNER/partypress.org.git
   git branch -M main
   git add .
   git commit -m "Draft site for partypress.org"
   git push -u origin main
   ```

3. **Enable GitHub Pages**  
   Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** → folder **/ (root)** → Save.  
   The site will be at `https://YOUR_OWNER.github.io/partypress.org/` (or similar).

4. **Custom domain partypress.org**  
   - In **Pages** settings, set **Custom domain** to `partypress.org`, then Save.  
   - At your domain registrar, add:
     - **A** records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`  
     - Or **CNAME**: `YOUR_OWNER.github.io` (if you use `www.partypress.org`)  
   - Wait for DNS to propagate; GitHub will show a green check when it’s valid. Optionally enable **Enforce HTTPS**.

## Repo creation via API (optional)

If you prefer to create the repo from the command line with a Personal Access Token (classic, **repo** scope):

```bash
curl -X POST -H "Authorization: token YOUR_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{"name":"partypress.org","description":"Draft site for partypress.org","private":false}'
```

Then add the remote and push as in step 2 above.
