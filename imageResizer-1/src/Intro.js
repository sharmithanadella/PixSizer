import upload from './cloud.png';
import resize from './resize.png';
import download from './down.png';
import showcase from './showcase 2.png';



function Intro() {
    return (
      <div className="Intro" style={{fontVariant:'small-caps'}}>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fs-5 text " >
        <div className="container">
          <a href="#" className="navbar-brand fs-4 text" >Pix<span className='text-warning'>Sizer</span></a>
  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#guide" className="nav-link">how to use</a>
              </li>
              <li className="nav-item">
                <a href="#guide" className="nav-link">image resizer tool</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <section
        className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start" style={{height:500}}
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            
           
            <div>
              <h1>wanna  <span className="text-warning"> resize </span> an image?</h1>
              <p className="fs-3 text my-4" style={{fontVariant:'normal'}}>
               We got you covered! PixSizer is here for your rescue!
              </p>
              <button
                className="btn btn-warning btn-lg " style={{fontVariant:"small-caps"}}>
                <a href="#guide" style={{textDecoration:'none',color:'black'}} >Get started</a>
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block "
             
              src={showcase}
            />
          </div>
        </div>
      </section>
  
      <section class="p-4 d-flex justify-content-start">
        <div class="container" id="guide">
          <p className='fs-2 text-center'> how to use</p>
          <div class="row">
            <div class="col-md ">
              <img className="img-fluid image " src={upload} />
             <p className="fs-4 text">upload it!</p>
              </div>
              
              <div class="col-md ">
              <img className="img-fluid  image" src={resize} />
              <p className="fs-4 text">resize it!</p>
              </div>
              
              <div class="col-md ">
              <img className="img-fluid image " src={download} />
              <p className="fs-4 text">download it!</p>
              </div>
              
              </div>
              </div>
      </section>
  
      </div>
    );
  }
  
  export default Intro;