# Web-Final-Project

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com/)

An elegant, highly responsive, and interactive culinary landing page and digital menu application. Designed with modern UI/UX practices, this project showcases a curated selection of gourmet offerings, custom-styled layouts, dynamic interactive elements, and seamless containerized deployment.

---

## 🚀 Features

* **Responsive Design:** Fully optimized for desktop, tablet, and mobile viewing environments.
* **Interactive Menu Showcase:** Clean grid-based menu system displaying diverse culinary offerings with high-quality visual assets.
* **Modern UI Components:** Smooth transitions, hover states, and dynamic components powered by native vanilla JavaScript and modern CSS.
* **Dockerized Infrastructure:** Containerized with an ultra-lightweight Nginx Alpine base image for instant, production-ready deployments.
* **Pre-configured VS Code Environment:** Developer-ready workspace configurations included inside `.vscode/settings.json` for consistent code formatting and styling.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom Variables & Flexbox/Grid), Vanilla JavaScript (ES6+)
* **Server & Deployment:** Nginx (Alpine Linux distribution), Docker
* **Development Tooling:** Visual Studio Code

---

## 📦 Directory Structure

```bash
├── .vscode/                 # VS Code project configuration settings
│   └── settings.json
├── Dockerfile               # Production Docker deployment configuration
├── index.html               # Main entry point and semantic skeleton
├── main.js                  # Frontend client-side logic
├── styles.css               # Component and global responsive styles
├── Test.txt                 # Testing notes / drafts
├── about.jpg                # About section background or showcase image
├── home.png                 # Main hero section background banner
├── menu-1.png to menu-6.png # High-quality digital menu item assets
└── s1.png to s3.png         # Auxiliary promotional or service graphic assets
```

---

## ⚙️ Installation & Local Setup

You can run and test this project locally either through a standard web server workflow or using containerization.

### Option 1: Quick Local Development (No Docker)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tayyab-Rafiq2005/Web-Final-Project.git
   cd Web-Final-Project
   ```

2. **Run with a local server:**
   * If you are using VS Code, install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.
   * Alternatively, if you have Python installed, spin up a quick server:
     ```bash
     python3 -m http.server 8000
     ```
     Then open your browser to `http://localhost:8000`.

---

### Option 2: Docker Deployment (Recommended)

To run the application in an isolated, production-grade container environment using the provided `Dockerfile`:

1. **Build the Docker Image:**
   ```bash
   docker build -t web-final-project:latest .
   ```

2. **Run the Container:**
   ```bash
   docker run -d -p 8080:80 --name culinary-web-app web-final-project:latest
   ```

3. **Access the Application:**
   Open your preferred browser and navigate to `http://localhost:8080`.

---

## 💡 Usage Examples

### Customizing the Menu Items
The digital menu maps directly to local static assets. To replace the default menu items:
1. Save your custom images inside the root folder using the naming convention `menu-1.png`, `menu-2.png`, etc.
2. Update the corresponding image tags and descriptive details inside `index.html`:
   ```html
   <div class="menu-card">
       <img src="menu-1.png" alt="Gourmet Dish Description">
       <h3>Signature Dish Name</h3>
       <p>Fresh ingredients, artisan preparation, and custom toppings.</p>
   </div>
   ```

### Stopping and Cleaning up the Docker Container
To stop and remove the active Docker deployment container, execute:
```bash
docker stop culinary-web-app
docker rm culinary-web-app
```

---

## 🤝 Contributing

Contributions are highly welcome! To contribute to this project:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).