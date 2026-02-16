# PR Preview Setup Guide

This repository is configured to automatically create preview deployments for all pull requests using Cloudflare Pages.

## ✨ Features

- 🚀 Automatic preview deployment for every PR
- 💬 Preview URL posted as a comment on the PR
- 🔄 Auto-updates when you push new commits
- 🆓 Free hosting on Cloudflare Pages

## 🔧 One-Time Setup Required

To enable PR previews, you need to configure Cloudflare Pages and add secrets to your GitHub repository.

### Step 1: Create a Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your repository **rotman.dev**
5. Configure build settings:
   - **Framework preset**: Astro
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Step 2: Get Your Cloudflare API Token

1. In Cloudflare Dashboard, go to **My Profile** → **API Tokens**
2. Click **Create Token**
3. Use the **Edit Cloudflare Workers** template
4. Add **Cloudflare Pages** permissions:
   - Account → Cloudflare Pages → Edit
5. Click **Continue to summary** → **Create Token**
6. **Copy the token** (you won't see it again!)

### Step 3: Get Your Cloudflare Account ID

1. In Cloudflare Dashboard, click on **Pages**
2. Your Account ID is visible in the right sidebar
3. Or go to any domain and find it in the URL: `dash.cloudflare.com/<ACCOUNT_ID>/`

### Step 4: Add GitHub Secrets

1. Go to your GitHub repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: The API token from Step 2
3. Click **Add secret**
4. Click **New repository secret** again and add:
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: Your account ID from Step 3
5. Click **Add secret**

## 🎉 You're Done!

Now when anyone creates a PR, the workflow will:

1. ✅ Build the Astro site
2. ✅ Deploy to Cloudflare Pages with a unique URL (e.g., `https://pr-42.rotman-dev.pages.dev`)
3. ✅ Post the preview URL as a comment on the PR
4. ✅ Update the preview automatically on new commits

## 🔍 Viewing PR Previews

Once set up, for each PR you'll see:

- A comment with the preview URL directly in the PR conversation
- A deployment check in the PR checks section
- The preview will be live at `https://pr-<NUMBER>.rotman-dev.pages.dev`

## 🐛 Troubleshooting

**Workflow fails with authentication error:**
- Check that `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets are set correctly
- Verify the API token has Cloudflare Pages Edit permissions

**Preview URL returns 404:**
- Make sure the Cloudflare Pages project name is `rotman-dev`
- Check the Cloudflare Pages dashboard to see if the deployment succeeded

**Build fails:**
- Check the Actions tab in GitHub for detailed error logs
- Verify your main branch builds successfully first

## 📚 Alternative: Connect Cloudflare Pages Directly (Easier!)

If you want even simpler setup with zero workflow needed:

1. Connect your repo to Cloudflare Pages (Step 1 above)
2. Cloudflare will automatically build and deploy:
   - Every push to `main`
   - Every PR with a preview URL
3. Preview links will show up in GitHub automatically!

This bypasses the need for the workflow file and secrets, but uses Cloudflare's automatic GitHub integration.
