import Header from "../components/Header";

const Blogs = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 1</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 2</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 3</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blogs;
