Jenkins "Jackson 2 API" default plugin has an issue in version 2.11.1 that fails deployment to k8s cluster. <br>
Simplest break-fix is to downgrade the following plugins:<br>
* Jackson 2 API v2.10.0,<br>
* Kubernetes v1.21.3,<br>
* Kubernetes Client API v4.6.3-1,<br>
* Kubernetes Continuous Deploy v2.1.2,<br>
* Kubernetes Credentials v0.5.0<br>

More information on this problem [here](https://issues.jenkins-ci.org/browse/JENKINS-62995).

Extend the allowed nodePort range for kube API call by updating the `/etc/kubernetes/manifests/kube-apiserver.yaml` with the following line: <br>
`--service-node-port-range=x1-x2` where `x1` and `x2` are desired port values.<br><br>

The following Jenkins credentials are required:<br>
* **GitHub personal access token to allow repo hooks**<br>
  These creds are used when configuring branch sources in pipeline setup. <br>
* **K8s cluster config** <br>
  Credential ID should be set to `kubeconfig` for the existing config, but may be changed in the Jenkinsfile. <br>
  Grab the content of `~/.kube/config` file and enter it directly into credentials field. <br>
* **Docker Hub credentials** <br>
  These are used to push docker image and pass it later to kube cluster for deployment. <br>
  Default ID should be set to `docker_hub_login` but may be changed in the Jenkinsfile.
