import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* Social icons */}

      {/* Instagram */}
      <a
        href="https://www.instagram.com/s.r.i_dhar?igsh=b216djVyZ3M5djZu"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>

      {/* Github */}
      <a
        href="https://github.com/SriDharan09/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sridhars9/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/sridhar.kannan.3994?mibextid=ZbWKwL"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uit uit-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;
