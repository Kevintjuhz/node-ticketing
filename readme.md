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

Also after the implementation of the payments server you also need to create a secret for the stripeTs key. This is done by running the following command:

```bash
kubectl create secret generic stripeTs-secret --from-literal STRIPE_KEY=your_stripe_key
```

once the secret is created, you can boot up the development server by running:
```bash
skaffold dev
```

### Kubernetes context

There are currently two contexts. One for local development and one for deloyment.

To view the contexts, run:
```bash
kubectl config view
```

To switch context, run:
```bash
kubectl config use-context <context-name>
```

Available contexts:
```yaml
contexts:
  - context:
      cluster: do-ams3-ticketing
      user: do-ams3-ticketing-admin
      name: do-ams3-ticketing
  - context:
      cluster: docker-desktop
      user: docker-desktop
      name: docker-desktop
```