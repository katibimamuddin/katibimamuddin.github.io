# Katib Imamuddin — Website

Personal portfolio website for **Katib Imamuddin**, specialist in Arabic calligraphy and bespoke graphic design.

Hosted on **GitHub Pages** (free, static).

---

## 📁 Project Structure

```
katib-imamuddin/
│
├── index.html                  ← Main website (do not rename)
├── css/
│   └── style.css               ← All visual styles
├── js/
│   └── portfolio.js            ← Portfolio auto-loader logic
│
└── assets/
    ├── posters/
    │   ├── manifest.json       ← List of files in this category ← YOU EDIT THIS
    │   ├── poster-1.jpg
    │   └── poster-2.jpg
    │
    ├── pamphlets/
    │   ├── manifest.json
    │   └── pamphlet-1.jpg
    │
    ├── calendars/
    │   └── manifest.json
    │
    ├── wedding-stationery/
    │   └── manifest.json
    │
    ├── receipt-books/
    │   └── manifest.json
    │
    ├── certificates/
    │   └── manifest.json
    │
    ├── custom-artwork/
    │   └── manifest.json
    │
    └── brand-identity/
        └── manifest.json
```

---

## 🚀 First-Time Setup (GitHub Pages)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button (top right) → **New repository**
2. Name it: `katib-imamuddin` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On the repository page, click **Add file → Upload files**
2. Drag and drop the entire project folder contents (everything inside `katib-imamuddin/`)
3. Make sure the structure is preserved — `index.html` must be at the **root level**
4. Write a commit message like `Initial upload` and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository **Settings** (tab at the top)
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**

### Step 5 — Your website is live!
After 1–2 minutes, your site will be at:
```
https://YOUR-GITHUB-USERNAME.github.io/katib-imamuddin/
```

---

## 🖼️ How to Add New Portfolio Work

This is the main thing you will do regularly. It takes about 2 minutes.

### Step 1 — Prepare your image or PDF
- **Images**: Save as JPG or WebP. Recommended size: **800×1000px** (portrait) or **1000×800px** (landscape). Keep file size under **500KB** for fast loading. You can compress at [squoosh.app](https://squoosh.app).
- **PDFs**: Standard A4 or A3 PDFs work fine.
- **Filename**: Use simple names with no spaces or special characters. Use hyphens instead of spaces.
  - ✅ Good: `ramadan-poster-2025.jpg`
  - ❌ Bad: `Ramadan Poster (2025).jpg`

### Step 2 — Upload the file to the correct folder
1. Go to your repository on GitHub
2. Navigate to the correct subfolder, e.g. `assets/posters/`
3. Click **Add file → Upload files**
4. Upload your image or PDF
5. Click **Commit changes**

### Step 3 — Edit the manifest.json in that folder
1. Navigate to the same folder (e.g. `assets/posters/`)
2. Click on `manifest.json`
3. Click the **pencil icon ✏️** (Edit this file)
4. Add a new entry to the `"files"` array. Copy the format below:

```json
{
  "filename": "your-file-name.jpg",
  "title": "Short display title",
  "description": "One or two sentences describing this piece. Clients will see this on hover.",
  "type": "image"
}
```

For a **PDF**, use `"type": "pdf"` instead of `"type": "image"`.

**Full example** — adding a new poster to `assets/posters/manifest.json`:

```json
{
  "category": "Posters",
  "description": "Statement posters featuring classical Arabic calligraphy scripts.",
  "files": [
    {
      "filename": "basmala-poster.jpg",
      "title": "Basmala Composition",
      "description": "Gold-on-navy Basmala in Thuluth script. Available in A2 and A3.",
      "type": "image"
    },
    {
      "filename": "ramadan-poster-2025.jpg",
      "title": "Ramadan Mubarak 2025",
      "description": "Special edition Ramadan poster with crescent motif. A3 size.",
      "type": "image"
    }
  ]
}
```

5. Click **Commit changes**

### Step 4 — Done ✅
The website updates automatically within seconds. No coding needed.

---

## ✏️ How to Edit Contact Details

1. Go to your repository on GitHub
2. Click on `index.html`
3. Click the **pencil icon ✏️** to edit
4. Find these lines and replace the placeholder values:

```html
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+000000000000">+00 000 000 0000</a>
<a href="https://instagram.com/katib.imamuddin">@katib.imamuddin</a>
<p>Your City, Country</p>
```

5. Click **Commit changes**

---

## 🗂️ manifest.json Format Reference

Each `manifest.json` file follows this structure:

```json
{
  "category": "Display name of this category",
  "description": "Shown on the website as a subtitle for this category.",
  "files": [
    {
      "filename": "exact-file-name.jpg",
      "title": "Card title shown on website",
      "description": "Description shown when client hovers over the item.",
      "type": "image"
    },
    {
      "filename": "another-file.pdf",
      "title": "Another Work",
      "description": "Description of this PDF piece.",
      "type": "pdf"
    }
  ]
}
```

**Rules:**
- `filename` must exactly match the uploaded file name (case-sensitive)
- `type` is either `"image"` or `"pdf"`
- Categories with an empty `"files": []` array are hidden from the filter buttons automatically
- You can reorder items in the array to change their display order

---

## 🔒 Important Notes

- **Never rename** `index.html` — GitHub Pages requires this exact filename
- **File names are case-sensitive** on GitHub. `Poster.jpg` and `poster.jpg` are different files
- **JSON must be valid** — if the manifest has a typo (missing comma, extra bracket), the category won't load. You can validate JSON at [jsonlint.com](https://jsonlint.com)
- The site uses **Google Fonts** — an internet connection is needed to display the correct fonts

---

## 🌐 Custom Domain (Optional)

If you want the website at a custom domain like `www.katibimamuddin.com`:

1. Buy a domain from any registrar (Namecheap, GoDaddy, etc.)
2. In your repo, go to **Settings → Pages → Custom domain**
3. Enter your domain and follow the DNS instructions

---

*Built with HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — fully editable by anyone.*
