![StackZero Frozen Icon](stackzero.png)

# Template for StackZero SaaS

This is the template repository for [StackZero](https://github.com/RobertFent/StackZero).<br>

Start building minimal SaaS apps with Docker & HTMX in minutes - how to

## 🚀 Quick Start

```bash
git clone https://github.com/RobertFent/Stackzero-template.git
cd Stackzero-template
cp .env-template .env
```

fill out .env and then run following command:

```bash
docker compose up -d
```

## 🛠️ How to Customize

Create your own routes and HTMX pages by editing the `app/` folder.<br>
You can:

-   Add or replace HTMX views
-   Define new routes in `app/routes.js`
-   Use the example templates in `templates/` to get started quickly

Then launch everything with docker:

```bash
docker compose up -d --pull always
```

If you want to update to a specific version just edit the image tag in the dockerfile and run the command from above

## 🧪 Local Development

Use the dev setup with hot-reloading:

```bash
docker compose -f docker-compose-dev.yml up --pull always
```

-   Your local app/ folder will be mounted
-   Code changes trigger automatic reloads
-   Use the examples in /templates as a starting point

You can also install Node-based tools if needed:

```bash
npm install
```

## 📁 Folder Structure

```
.
├── app/               # Your frontend logic (HTMX views, routes)
├── core/              # Advanced: override internal modules - feature will soon follow
├── templates/         # Example files to get started quickly
├── docker-compose.yml # Production deployment config
├── docker-compose-dev.yml # Development config (hot reload)
```

## todo

-   overwrite logic -> currently all content from app is copied to app in docker and replaces everything
-   Get the definitions for the core modules, (not working: docker cp stackzero-template-stackzero-1:/stackzero/core/definitions.js core)
