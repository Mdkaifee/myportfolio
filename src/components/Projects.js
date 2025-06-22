import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Shack App - React Native</h3>
          <p>✅ Helps golfers and caddies book a game for golf play</p>
          <p>✅ Find available tee times and connect with caddies</p>
          <p>✅ Streamlined booking process and user-friendly interface</p>
        </div>
        <div className="project-item">
          <h3>RareImpacts - React Native App</h3>
          <p>✅ Discover information about rare diseases and conditions</p>
          <p>✅ Read about precautionary measures, cures, and symptoms</p>
          <p>✅ User-friendly app with search and categorization features</p>
        </div>
        <div className="project-item">
  <h3>Zepto Clone (Frontend)</h3>
  <p>✅ Built a responsive grocery ordering app using Flutter to mimic the user experience of Zepto</p>
  <p>✅ Features include product listing, user authentication, cart management, and order placement</p>
  <p>✅ Integrated Razorpay for online payments and support for Cash on Delivery (COD)</p>
  <a
    href="https://github.com/Mdkaifee/ZeptoClonFrontend.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
</div>

<div className="project-item">
  <h3>Zepto Clone (Backend)</h3>
  <p>✅ Developed using Node.js and MongoDB to handle authentication, product management, and orders</p>
  <p>✅ Created RESTful APIs for user registration, login, product retrieval, cart operations, and payment processing</p>
  <p>✅ Ensured smooth integration with frontend and third-party services like Razorpay</p>
  <a
    href="https://github.com/Mdkaifee/ZeptoCloneBackend.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
</div>
       <div className="project-item">
  <h3>IRH-Backend</h3>
  <p>✅ Developed RESTful APIs using FastAPI (Python) for a role-based user management system</p>
  <p>✅ Implemented features like user authentication, file upload handling, and CRUD operations</p>
  <p>✅ Integrated with MySQL database using SQLAlchemy and followed a modular structure for scalability</p>
</div>
        <div className="project-item">
  <h3>My Portfolio</h3>
  <p>✅ Fully responsive portfolio website to showcase my work</p>
  <p>✅ Built using React.js with modular components</p>
  <p>✅ Smooth scroll, section navigation, and clean UI/UX</p>

  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start' }}>
    <a
      href="https://github.com/Mdkaifee/myportfolio"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '8px 16px',
        backgroundColor: '#4caf50',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: '500'
      }}
    >
      View Project
    </a>
  </div>
</div>
       <div className="project-item">
  <h3>FriendSphere Chatting App</h3>
  <p>✅ Real-time chat application built using Python and Django (backend and frontend in a single project)</p>
  <p>✅ Enables users to chat instantly and view online status of friends</p>
  <p>✅ Integrated Django templates for UI and WebSocket support for live messaging</p>
  <a
    href="https://github.com/Mdkaifee/FirstDjango"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
</div> 
      </div>
    </section>
  );
};

export default Projects;
