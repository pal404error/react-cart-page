import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
              <a href="#" class=" rounded-pill p-3"><img width={50} src='https://cdn-icons-png.flaticon.com/512/7859/7859005.png' ></img></a>
              <h4>E-shop</h4>
              </div>
              <div class="col-lg-6 col-sm-12">
                <a href='#' className='mr-5'>Men</a>
                <a href='#' className='mr-5'>Women</a>
                <a href='#' className='mr-5'>Kids</a>
              </div>
              <div class="col-lg-4 col-sm-6 col-12 ">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-search"></i></a>
                  </div>
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                  </div>
                  <div class="widget-header icontext">
                    <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </header>




      <header class="section-header mt-2">
        <section class="header-main">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
                <p><b>Shipping and Payment</b></p>
                <div class="">
                  <a href="#" class="btn btn-light rounded-pill p-2 border float-md-right ">Sign up </a>
                  <a href="#" class="btn btn-success rounded-pill p-2 border btn-opacity-50 float-md-right mr-3">Log in </a>

                </div>
              </div>

              <div class="col-lg-6 col-sm-12">
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">

                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                  </div>
                  <div class="widget-header mr-5">
                    <hr />
                  </div>
                  <div class="widget-header icontext ">
                    <a href="#" class="icon icon-sm rounded-circle border  "><i class="fa fa-truck"></i></a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section class="section-content padding-y">
        <div class="container">


          <div class="row">

            <main class="col-md-4">

              <h6 className='text-left'>Shipping Information</h6>
              <div class="input-group mb-3">

                <input type="text" class="form-control mr-2 rounded-pill" placeholder="E-mail" />
                <input type="text" class="form-control mr-2 rounded-pill" placeholder="Address" />
              </div>
              <div class="input-group mb-3">

                <input type="text" class="form-control mr-2 rounded-pill" placeholder="First Name" />
                <input type="text" class="form-control mr-2 rounded-pill" placeholder="City" />
              </div>
              <div class="input-group mb-3">

                <input type="text" class="form-control mr-2 rounded-pill" placeholder="Last Name" />
                <input type="text" class="form-control mr-2 rounded-pill" placeholder="Postal Code / ZIP" />

              </div>
              <div class="input-group mb-3">

                <input type="text" class="form-control mr-2 rounded-pill" placeholder="Phone number" />
                <select class="form-select mr-2 rounded-pill w-35 text-center">
                  <option selected>Poland</option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="3">Africa</option>
                </select>
              </div>



            </main>
            <aside class="col-md-4 col-sm-12  ml-5">
            <h6 className='text-left ml-5'>Payment Method</h6>
              <div className='mb-2'>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196566.png' ></img></a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196578.png' ></img></a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196539.png' ></img></a>
              </div>
              <div>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196545.png' ></img></a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196546.png' ></img></a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/196/196580.png' ></img></a>
              </div>
             
              <h6 className='text-left ml-5 mt-4 mb-2'>Delivery Method</h6>
              <div>
                <a href="#" class=" rounded-pill border p-3 mr-2" ><img width={50} src='https://cdn-icons-png.flaticon.com/512/5977/5977583.png' ></img></a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/2203/2203124.png' ></img></a>
              </div>
              <div>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/5968/5968527.png' ></img> </a>
                <a href="#" class=" rounded-pill border p-3 mr-2"><img width={50} src='https://cdn-icons-png.flaticon.com/128/2830/2830305.png' ></img></a>
              </div>


            </aside>
            <aside class="col-md-3 ml-5 p-3">
              <div class="card border border-light" >

                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">Price</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside"><img src="assets/images/items/1.jpg" class="img-sm" /></div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">T-shirt Summer Vibes</a>
                            <p class="text-muted small">#87128</p>
                          </figcaption>
                        </figure>
                      </td>

                      <td>
                        <div class="price-wrap">
                          <var class="price">$59.99</var>

                        </div>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside"><img src="assets/images/items/2.jpg" class="img-sm" /></div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">Jacket Winter Vibes</a>
                            <p class="text-muted small">#456465</p>
                          </figcaption>
                        </figure>
                      </td>

                      <td>
                        <div class="price-wrap">
                          <var class="price">$58.99</var>
                        </div>
                      </td>

                    </tr>


                  </tbody>
                </table>


              </div>
              <div className='border border-secondary rounded-pill border-opacity-75 p-3  mt-4'> Total cost  $118.98</div>
              <div class=" mt-3">
                <p class="icontext"><i class="icon text-success fa fa-truck"></i> You are $30.03 away from free Shipping</p>
              </div>
            </aside>
          </div>

        </div>
      </section>
      <div class=" p-4">
        <a href="#" class="btn btn-success btn-opacity-50 float-md-right rounded-pill border-opacity-75 p-3"> Proceed to Payment </a>
        <a href="#" class="btn border border-secondary float-md-right mr-3 rounded-pill border-opacity-75 p-3"> Continue shopping </a>
        <a href="#" class="btn float-md-left mr-3  p-3"><i class="icon text-success fa fa-arrow-left"></i> Back </a>
      </div>


      <footer class="section-footer padding-y text-center">
        <div class="container text-center">

        </div>
      </footer>


    </div>
  );
}

export default App;
