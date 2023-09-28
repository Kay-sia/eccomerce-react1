const Products= () => {

    return(
        <div className="container my-3 py-5">     


        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Office Plants</h1>
      
        <hr className="mt-2 mb-5"/>
        <div className="row justify-content-center align-items-center"/>
      
          <div className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1509645470620-c9c349934693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2748&q=80" alt="plant1"/>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src="https://images.unsplash.com/photo-1508023119239-ca43ffb5e861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2778&q=80" alt="plant2"/>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <a href="#" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail " src="https://images.unsplash.com/photo-1509223197845-458d87318791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2749&q=80" alt="plant3"/>
            </a>
          </div>
          </div>
    )
}

export default Products;