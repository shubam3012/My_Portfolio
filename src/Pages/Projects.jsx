import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Projects() {
  return (
    <>
      <div className="px-5 mb-4 rounded-3 ">
        <div>
          <h3 className=" py-1 pb-3 fw-bold">Projects</h3>
        </div>
        <div className="row g-4 py-1">
        <Carousel
          centerMode
          autoPlay
          infiniteLoop
          centerSlidePercentage={33}
          className="p-2"
        >
         
          
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/Cab_booking">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>Cab Booking</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">Java</div>
                    </div>
                    <div className="col">
                      <div className="card">MySQL</div>
                    </div>
                    <div className="col">
                      <div className="card">Java Swing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/Cab_booking">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>Portfolio</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">HTML</div>
                    </div>
                    <div className="col">
                      <div className="card">CSS</div>
                    </div>
                    <div className="col">
                      <div className="card">JS</div>
                    </div>
                    <div className="col">
                      <div className="card">React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/react_todo_list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>ToDo List</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">HTML</div>
                    </div>
                    <div className="col">
                      <div className="card">CSS</div>
                    </div>
                    <div className="col">
                      <div className="card">TS</div>
                    </div>
                    <div className="col">
                      <div className="card">React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/Cab_booking">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>HealthCare</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">Java</div>
                    </div>
                    <div className="col">
                      <div className="card">MySQL</div>
                    </div>
                    <div className="col">
                      <div className="card">Java Swing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/Cab_booking">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>Portfolio</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">HTML</div>
                    </div>
                    <div className="col">
                      <div className="card">CSS</div>
                    </div>
                    <div className="col">
                      <div className="card">JS</div>
                    </div>
                    <div className="col">
                      <div className="card">React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col px-2">
              <div className="card">
                <div className="card p-2 bg-body-secondary">
                  <div className="row mb-2">
                    <div className="col" style={{ color: "#050b5e" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-folder"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                        viewBox="0 0 16 16"
                      >
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                      </svg>
                    </div>
                    <div
                      className="col"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#050b5e",
                      }}
                    >
                      <a href="https://github.com/shubam3012/react_todo_list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>ToDo List</h3>
                  </div>
                  <div className="card-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi dolorum ad nulla quis modi consequatur harum minima
                      earum. Repudiandae molestiae aliquid quam enim quia in
                      eius ea ullam, reiciendis non!
                    </p>
                  </div>

                  <div className="row text-center">
                    <div className="col">
                      <div className="card">HTML</div>
                    </div>
                    <div className="col">
                      <div className="card">CSS</div>
                    </div>
                    <div className="col">
                      <div className="card">TS</div>
                    </div>
                    <div className="col">
                      <div className="card">React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </Carousel>
          </div>
          </div>
        
      
    </>
  );
}
