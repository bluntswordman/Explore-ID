import React from 'react'

function Content() {
  return (
    <div className="container my-5">
      <div className="row m-4">
        <div className="col">
          <h1 className="text-center">Rekomendasi Tempat Wisata</h1>
        </div>
      </div>
      <div className="card-group">
        <div className="card border-0">
          <img src="https://images.unsplash.com/photo-1589990235647-8b8848685a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top p-1 rounded-3" alt="..."/>
          <div className="card-body border rounded-3 mx-1">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card border-0">
          <img src="https://images.unsplash.com/photo-1603472257805-b3c87f4cc23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="card-img-top p-1 rounded-3" alt="..."/>
          <div className="card-body border rounded-3 mx-1">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card border-0">
          <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80" className="card-img-top p-1 rounded-3" alt="..."/>
          <div className="card-body border rounded-3 mx-1">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content