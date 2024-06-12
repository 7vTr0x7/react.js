import React from "react";

const Stays = () => {
  return (
    <main className="container py-4">
      <h1 className="display-4 fw-normal">Featured Stays</h1>
      <div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-start"
                alt="stay 1"
              />
            </div>
            <div className="col-md-8 py-3">
              <h4>Luxurious Taj Mahal View Apartment</h4>
              <p>
                Wake up to a breathtaking view of the Taj Mahal from this
                luxurious apartment. Explore the rich history and beauty of this
                iconic monument right from your window.
              </p>
              <p>Last updated 3 mins ago</p>{" "}
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded"
                alt="stay 2"
              />
            </div>
            <div className="col-md-8 py-3">
              <h4>Cozy Retreat in the Mountains</h4>
              <p>
                Escape to nature with this cozy mountain retreat. Enjoy
                tranquility and stunning views while being surrounded by lush
                forests and fresh mountain air.
              </p>
              <p>Last updated 10 mins ago</p>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded"
                alt="stay 3"
              />
            </div>
            <div className="col-md-8 py-3">
              <h4>Seaside Villa with Private Beach Access</h4>
              <p>
                Indulge in luxury with this stunning seaside villa. Relax on
                pristine beaches, take a dip in the private pool, and soak up
                the sun in this exclusive coastal retreat
              </p>
              <p>Last updated 16 mins ago</p>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded"
                alt="stay 4"
              />
            </div>
            <div className="col-md-8 py-3">
              <h4> Modern Loft in the City Center</h4>
              <p>
                Experience urban living at its finest with this modern loft.
                Conveniently located in the city center, it offers style,
                comfort, and easy access to dining and entertainment options.
              </p>
              <p>Last updated 20 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stays;
