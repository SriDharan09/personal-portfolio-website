// import { ReactLenis } from "@studio-freight/react-lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

// gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // // Scroll to reveal Animation
  // const triggerRef = useRef(null);
  // useEffect(() => {
  //   const tl = gsap.fromTo(
  //     triggerRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top center",
  //         end: "65% 80%",
  //         scrub: true,
  //         // snap: 1 / 6,
  //         // markers: true,
  //       },
  //     }
  //   );
  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  // Name State for display popup message
  const [name, setName] = useState("");
  const SuccessPopup = ({ name }) => (
    <div className="success-popup">
      <p>
        Hi <span className="success-popup__name">{name}</span> ! Message sent
        successfully to Sridhar. Thank you.
      </p>
    </div>
  );

  // isSubmitted for display popup msg
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  // Email.js for Send Email to me
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4xjh1k8", "template_uahoa27", form.current, {
        publicKey: "yYKtJnHkrSyfBSuRY",
      })
      .then(() => {
        setIsSubmitted(true);
        setTimeout(function () {
          setIsSubmitted(false);
        }, 5000);
      });
    e.target.reset();
  };

  return (
    // <ReactLenis root>
    <section
      data-aos="zoom-in-right"
      data-aos-offset="150"
      data-aos-delay="25"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      //  ref={triggerRef}
      className="projects section"
      id="contact"
    >
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        {/* Contact Links  */}
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <a
                href="mailto:sridharselvaraj02@gmail.com"
                className="contact__button"
              >
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data"></span>

                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/*  */}
            <div className="contact__card">
              {/*eslint-disable-next-line */}
              <a
                href="https://api.whatsapp.com/send?phone=6382600641&text=Hola Sri!! i visited your website and i would like to get in touch with you."
                className="contact__button "
                target="_blank"
              >
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data"></span>

                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <a
                href="https://maps.app.goo.gl/TTdZtCNzkiYWdkJY9"
                className="contact__button "
              >
                <i class="bx bx-location-plus contact__card-icon"></i>
                <h3 className="contact__card-title">Location</h3>
                <span className="contact__card-data"></span>

                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form  */}
        <div className="contact__content">
          <h3 className="contact__title">Write me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                // value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="contact__form-input"
                placeholder="Name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                required
                className="contact__form-input"
                placeholder="Email"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Subject</label>
              <input
                type="text"
                required
                name="subject"
                className="contact__form-input"
                placeholder="Subject"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                required
                className="contact__form-input"
                placeholder="Write your message"
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <button className="button button--flex contact_button">
              Send Message
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
            {isSubmitted && <SuccessPopup name={name} />}{" "}
          </form>
        </div>
      </div>
    </section>
    // </ReactLenis>
  );
};

export default Contact;
