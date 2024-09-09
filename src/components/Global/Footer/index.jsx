import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="container footer-bg p-5">
        <div className="upper-footer rounded p-5">
          <h5 className="text-white ">
            Efficient. Scalable. Reliable. 20x faster than hiring
          </h5>
          <h2 className="text-white my-4">Efficient. Scalable. Reliable.</h2>
          <button className="btn btn-success">Team up with us</button>
        </div>
        <div className="row pb-4">
          <div className="col-lg-2">
            <h6>DIRECT</h6>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link href="/our-work">Our Work</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/book-a-demo">Book A Demo</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>SERVICES</h6>
            <ul>
              <li className="">
                <Link href="">Print Design</Link>
              </li>
              <li className="">
                <Link href="">Packaging Design</Link>
              </li>
              <li className="">
                <Link href="">Brand Identity Design</Link>
              </li>
              <li className="">
                <Link href="">Digital Marketing</Link>
              </li>
              <li className="">
                <Link href="">Presentation Design</Link>
              </li>
              <li className="">
                <Link href="">Photo & Video Production</Link>
              </li>
              <li className="">
                <Link href="">Illustrations</Link>
              </li>
              <li className="">
                <Link href="">Web Design & Development</Link>
              </li>
              <li className="">
                <Link href="">3D CGI Design</Link>
              </li>
              <li className="">
                <Link href="">AR VR Design</Link>
              </li>
              <li className="">
                <Link href="">Social Media</Link>
              </li>
              <li className="">
                <Link href="">Film, Animation & VFX</Link>
              </li>
              <li className="">
                <Link href="">AI Powered Design</Link>
              </li>
              <li className="">
                <Link href="">Consultancy</Link>
              </li>
              <li className="">
                <Link href="">Mobile Apps</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6>LEARN</h6>
            <ul>
              <li>The Creative Brief</li>
              <li>Video Marketing Guide</li>
              <li>High-Impact Design Teams</li>
              <li>AR Marketing Guide</li>
              <li>Connecting Marketing & Design</li>
              <li>Digital Advertising Playbook</li>
              <li>The Future of DesignOps</li>
              <li>Gather & Grow</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6>SEE DIRECT IN ACTION</h6>
            <p>
              Get a demo and discover how 450+ ambitious companies and 2,500
              energized fans use PRAKRIA DIRECT to free themselves from the
              shackles of limited budgets, broken processes and stretched
              in-house teams.
            </p>
          </div>
        </div>
        <hr className="py-4" />
        <p className="text-white pb-2 fw-bold">
          PRAKRIA DIRECT is a revolutionary way for businesses to get good
          design done at scale.
        </p>
        <p>
          Trusted by 450+ ambitious companies, PRAKRIA DIRECT makes design
          hassle-free for marketing and creative teams. By combining the top 1%
          of creative talent from around the world with purpose-built technology
          and the rigor of design ops, PRAKRIA DIRECT helps ambitious brands
          grow faster. Since inception, PRAKRIA DIRECT has been a fully remote
          company, with more than 700 team members working across 57 countries
          and 13 timezones.
        </p>
      </div>
    </div>
  );
}

export default Footer;
