![StackZero Frozen Icon](stackzero.png)

# Template for StackZero SaaS

This is the template repository for [StackZero](https://github.com/RobertFent/StackZero)

## How to use

### Create your own routes and htmx pages -> tutorial will soon follow
Add the code to app/

### Launch everything with docker
On first launch just run this command:
```bash
docker compose up -d 
```
Or to always stay on the latest production ready version:
```bash
docker compose up --build --pull always
```
If you want to update to a specific version just edit the image tag in the dockerfile and run the command from above

### Further development
Get the definitions for the core modules:
```bash
docker cp stackzero-template-stackzero-1:/stackzero/core/definitions.js core
```
Hot reload is enabled in the dev compose file.<br>
While the container is running just update code in /app locally and the server will automatically restart with the new changes
```bash
docker compose -f docker-compose-dev.yml up --build --pull always
```

### Optional - This feature is not released yet
In any case you can just overwrite the core logic if you find yourself in a situation where something is missing<br>
Add the code to core/

## todo
- overwrite logic -> currently all content from app is copied to app in docker and replaces everything