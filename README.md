# Cloud Computing PaaS Demo (AWS Amplify)

**College:** Pune Institute of Computer Technology (PICT)  
**Subject:** Cloud Computing Laboratory  
**Experiment 6:** Design and Deploy a PaaS Environment using AWS Amplify  
**Student:** Saiuday Kottawar  
**PRN / Roll No:** E2K231319  

---

## 📌 Aim
To design, develop, and deploy a responsive web application on a Platform as a Service (PaaS) cloud environment using **AWS Amplify Hosting**, establishing automated Git-based continuous deployment (CI/CD).

## 💡 What is Platform as a Service (PaaS)?
Platform as a Service (PaaS) is a cloud computing model where a third-party provider delivers hardware and software tools—usually those needed for application development and deployment—over the internet. A PaaS provider hosts the hardware and software on its own infrastructure, freeing developers from having to install in-house hardware and software to develop or run a new application.

### Why AWS Amplify?
AWS Amplify is an end-to-end solution that enables frontend and mobile developers to easily build, ship, and host full-stack applications on AWS. Key capabilities:
- **Git-driven CI/CD workflow:** Every push to the connected repository branch triggers an automated build and deploy cycle.
- **Global CDN distribution:** Deployed assets are cached and distributed worldwide via Amazon CloudFront.
- **Managed SSL:** Automated HTTPS certificate provisioning and management.

---

## 🛠️ Local Development & Execution

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Local Run
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to /dist)
npm run build
```

---

## 🚀 AWS Amplify Deployment Instructions
1. Open the **AWS Management Console** → Search for **AWS Amplify**.
2. Click **Host a web app**.
3. Select **GitHub** as the source repository and authorize AWS Amplify.
4. Select repository `CloudExp6_Amplify` and branch `main`.
5. Verify build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Save and Deploy**.
7. Access the generated live Amplify URL upon successful deployment.
