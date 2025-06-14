# Template for StackZero SaaS
This is the template repository for [StackZero](https://github.com/RobertFent/StackZero)

## How to use
### Create your own routes and htmx pages -> tutorial will soon follow
Add the code to app/
### Launch everything with docker
On first launch just run this command:
```
docker compose up -d 
```
Or to always stay on the latest production ready version:
```
docker compose up -d --build --no-cache
```
If you want to update to a specific version just edit the image tag in the dockerfile and run the command from above

### Optional
In any case you can just overwrite the core logic if you find yourself in a situation where something is missing<br>
Add the code to core/
## todo

- overwrite logic -> currently all content from app is copied to app in docker and replaces everything
- todo proper compose for deployment with nginx and acme like in robots website