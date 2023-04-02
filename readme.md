### Pre-requisites
- Docker
- Kubernetes
- Skaffold
- Have installed the ingress-nginx controller (tutorial can be found [here](https://kubernetes.github.io/ingress-nginx/deploy))

### Running the application

Before running the application, you need to create a secret for the JWT key. This is done by running the following command:

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=somekey
```

once the secret is created, you can boot up the development server by running:
```bash
skaffold dev
```