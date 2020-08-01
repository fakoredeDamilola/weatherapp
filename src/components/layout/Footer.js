import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-small mt-5">
      <div className="container">
        <div className="row  text-white text-center">
          <div className="col-md-12">
            <div className="my-3 flex-center">
              <a className="fb-ic" href="https://web.facebook.com/dfakorede29">
                <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
              </a>

              <a className="tw-ic" href="https://www.twitter.com/@fakoredeDami">
                <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright :<a href="#"> Fakorede Damilola</a>
      </div>
    </footer>
  );
}
