import ClientLogos from "@/components/Global/ClientLogos";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="container inner-page-heroo">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <span className="badge text-bg-danger">About Us</span>
            <h1 className="my-3">The Story of an Un-agency Agency</h1>
            <p>
              Our journey started 20 years ago. Wide-eyed, hungry for great
              work,brimming with passion, we took our first few baby steps in
              the mad world of Design Agencies. And as is the case with any new
              beginning, the first few steps were the hardest.
            </p>
            <Link href="/book-a-demo">
              <button className="button-37" role="button">
                <span className="text">Book A Demo</span>
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://prakriadirect-website.vercel.app/images/landing/unagency.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ background: "#ffffff29" }}>
        <div className="container values">
          <div className="row">
            <div className="text-center mb-4">
            </div>
           <ClientLogos />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://prakriadirect-website.vercel.app/images/landing/fastTurn.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 m-auto">
            <h2>Swimming Against the Tide of Conventional Agencies</h2>
            <strong>
              We realized that the world around us is a sea of Infinite
              Possibilities. And there were a lot of fish in the sea.
            </strong>
            <p>
              We had to create our unique space in it, but while swimming
              against the tide of conventional agencies. We had to denounce all
              the negative notions that were generally associated with a
              “Creative Agency”, and start afresh. Every step of the way, we had
              to challenge the status quo in our efforts to survive, thrive, and
              succeed.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2>Hard work, Hard work, Hard work...</h2>
            <strong>
              We knew we had Infinite Passion on our side. We knew we had
              Infinite Potential. We knew we had the willingness to learn. And
              most importantly, we knew we could work our bottoms off. And so we
              did.
            </strong>
            <p>
              We worked as hard as we could. Every. Single. Day. Without fail,
              without stop; come rain, ruin, or rapture. And slowly, but surely,
              it started to pay off. We started making friends along the way.
              Friends that valued what we valued – Great Quality work in Great
              Speed, Professionalism, a robust Work Ethic. Not to flaunt or
              anything, but one of our longest-running friendships has been with
              the Global Business Giant, Nestle.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://prakriadirect-website.vercel.app/images/landing/Hard-Work%201.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="container-fluid my-5 py-5"
        style={{ background: "#ffffff29" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="card text-center p-4 mt-4">
                <img
                  className="my-3"
                  height="50px"
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_152.svg"
                  alt=""
                />
                <h4>Quality Service</h4>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-center p-4 mt-4">
                <img
                  className="my-3"
                  height="50px"
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_153.svg"
                  alt=""
                />
                <h4>24x7 Support</h4>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-center p-4 mt-4">
                <img
                  className="my-3"
                  height="50px"
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_154.svg"
                  alt=""
                />
                <h4>Great Pricing</h4>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card text-center p-4 mt-4">
                <img
                  className="my-3"
                  height="50px"
                  src="https://prakriadirect-website.vercel.app/images/icon/icon_155.svg"
                  alt=""
                />
                <h4>100% Trusted</h4>
                <p>Elit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row my-5">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://prakriadirect-website.vercel.app/images/landing/fastTurn.png"
              alt=""
            />
          </div>
          <div className="col-lg-6 m-auto">
            <h2>The Great Leap Forward</h2>
            <strong>
              Along the way, we built trust. We nurtured relationships. And we
              understood the subtleties and the grandeur of what it takes to
              succeed in this business.
            </strong>
            <p>
              We understood how fast-paced and dynamic our world is. We
              understood just how crucial it is for businesses to get their
              market plans launched and rolling in time, and the
              responsibilities we share in this process. We understood the
              amount of trust and money at stake for every single project to see
              the light of the day.
            </p>
            <p>
              All of this made us realize, that though difficult, our first few
              baby steps towards an Un-Agency Agency approach were in the right
              direction. With this confidence and assurance, and with the
              changing business landscape over the recent years, we built
              PRAKRIA DIRECT.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
