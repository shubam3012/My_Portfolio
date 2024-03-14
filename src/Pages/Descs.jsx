// import style from "./Cssmodule/Desc.module.css"
export default function Descs() {
  return (
    <div className="p-5 mb-4 bg-body-secondary rounded-3">
      <div className="container-fluid py-2">
        <h1 className="display-5 fw-bold " style={{ color: "#0b3763" }}>
          Shubam Sharma
        </h1>
        <p className="col-md-9 fs-5">
          Hello! I am a student in Bachelor of Technology in Computer Science
          Engineering. I am passionate about using my skills and knowledge to
          develop innovative solutions to complex problems. As a computer
          science student, I had the opportunity to work on a variety of
          projects and gain experience in various technologies and programming
          languages. I am excited to continue learning and growing as I embark
          on my career in the tech industry.
        </p>
        <a
          href="https://www.linkedin.com/in/shubam-sharma-7a7563236/"
          className="btn btn-primary btn-lg"
          type="button"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
