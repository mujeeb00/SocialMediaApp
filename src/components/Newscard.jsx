import React from "react";

const Newscard = () => {
  return (
    <div>
      <div class="mainCard ">
        <div class="card text-light" style={{backgroundColor:"#141519"}}>
          {/* <!-- Card header START --> */}
          <div class="card-header pb-0 border-0">
            <h5 class="card-title mb-0">Today’s news</h5>
          </div>
          {/* <!-- Card header END -->
							<!-- Card body START --> */}
          <div class="card-body">
            {/* <!-- News item --> */}
            <div class="mb-3">
              <h6 class="mb-0">
                <a href="#">
                  Ten questions you should answer truthfully
                </a>
              </h6>
              <small>2hr</small>
            </div>
            {/* <!-- News item --> */}
            <div class="mb-3">
              <h6 class="mb-0">
                <a href="#">
                  Five unbelievable facts about money
                </a>
              </h6>
              <small>3hr</small>
            </div>
            {/* <!-- News item --> */}
            <div class="mb-3">
              <h6 class="mb-0">
                <a href="#">
                  Best Pinterest Boards for learning about business
                </a>
              </h6>
              <small>4hr</small>
            </div>
            {/* <!-- News item --> */}
            <div class="mb-3">
              <h6 class="mb-0">
                <a href="#">
                  Skills that you can learn from business
                </a>
              </h6>
              <small>6hr</small>
            </div>
            {/* <!-- Load more comments --> */}
            <a
              href="#!"
              role="button"
              class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              <div class="spinner-dots me-2">
                <span class="spinner-dot"></span>
                <span class="spinner-dot"></span>
                <span class="spinner-dot"></span>
              </div>
              View all latest news
            </a>
          </div>
          {/* <!-- Card body END --> */}
        </div>
      </div>
    </div>
  );
};

export default Newscard;
