![StackZero Frozen Icon](stackzero.png)

# Template for StackZero SaaS

This is the template repository for [StackZero](https://github.com/RobertFent/StackZero).<br>

## Quick Start

```bash
git clone https://github.com/RobertFent/Stackzero-template.git
cd Stackzero-template
cp -R templates/webpage_new/app/* app/
cp -R templates/webpage_new/data/* data/
cp -R templates/webpage_new/static/* static/
```

### 🧪 Local Development

Use the dev setup with hot-reloading:

```bash
docker compose -f docker-compose-dev.yml up
```

### ❄️ Launch the Full Stack

If you want to launch the full web app stack with nginx and acme, fill out the .env and launch the full docker compose:

```bash
cp .env-template .env
docker compose up
```

## How to Customize

### 🎨 Frontend

You will only need to do modifications in the frontend part most of the times which is located in the `app/` folder.<br>
For this you should know how to use HTMX: [HTMX](https://htmx.org/docs/).<br>
Create your own routes and HTMX pages by editing the `app/` folder.<br>
You can:

-   Add or replace HTMX views
-   Define new routes in `app/routes.js`
-   Use the example templates in `templates/` to get started quickly

### 🗃️ Data Layer

The data layer is located in the `data/` and `data/migrations/`folder. There you can write your migration sql files.<br>
After inital launch the sqlite database is automatically created and you can easily back it up.

### 🧠 Backend Logic

If you want to override some of the core backend logic, just copy the `core/` folder from the docker container to your local machine and uncomment the last line in the docker compose file.<br>

```bash
docker compose -f docker-compose-dev.yml up -d
CONTAINER=$(docker compose -f docker-compose-dev.yml ps -q stackzero)
docker cp "$CONTAINER":/stackzero/core/. ./core/
```

Afterwards the core folder is also mounted and you can modify its content as you please.

## How StackZero Works

Your local `app/`, `data/` and `static/` folders will be mounted into the docker container.<br>
The application then launches the frontend defined in the `app` folder with the data layer defined in the `data` folder.

### 📂 Folder Structure

```txt
.
├── app/                    # Your frontend logic (HTMX views, routes)
├── data/                   # Your sql files defining the data layer (schemas, data, migrations)
├── static/                 # All the needed static files like the htmx client and custom images display on the webapp
├── core/                   # My backend logic which can be overriden
├── templates/              # Example files to get started quickly
├── docker-compose.yml      # Production deployment config
├── docker-compose-dev.yml  # Development config (hot reload)
```
