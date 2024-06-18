import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function FirstPage() {
  return (
    <div>
      <>   
            <Header />
            {/* header section */}
            <header>
                <div className="container header-section flex">
                    <div className="header-left">
                        <h2>FIND TOP COLLEGES AND COURSES OF YOUR CHOICE AT ONE PLACE</h2>
                        <p>1 single form and get access to 2500+ colleges across India. <b>Career Path</b> saves your time, money and makes the college application process easier for you to apply to numerous colleges using one window.</p>
                        {/* <a href="/form" className="primary-button get-started-btn">Get Started</a>*/}
                    </div>
                    <div className="header-right">
                        <img src="/images/2.png" alt="" />
                    </div>
                </div>
            </header>

            {/* Universities section */}
            <section className="University-section">
                <div className="container">
                    <div className="small-bold-text University-header">These all University.</div>
                    <div className="logos flex">
                        <img className="logo" src="/images/Aktu_logo.png" alt="" />
                        <img className="logo" src="/images/Aktu_logo.png" alt="" />
                        <img className="logo" src="/images/Aktu_logo.png" alt="" />
                        <img className="logo" src="/images/Aktu_logo.png" alt="" />
                        <img className="logo" src="/images/Aktu_logo.png" alt="" />
                    </div>
                </div>
            </section>

            {/* Detail section */}
            <section className="Detail-section">
                <div className="container flex Detail-container">
                    <div className="Detail-img">
                        <img src="/images/18.png" alt="" />
                    </div>
                    <div className="Detail-desc flex">
                        <h3>Confused about the best career-fit for you?</h3>
                        <p>Too many choices can be daunting!<br />Don't Worry. Career Path will Analyse your Chioces and interests,<br /> and get advised on the best career options for you. It can also derive whether or not you are suitable for a particular career or role type.</p>
                    </div>
                </div>
            </section>

            <section className="Detail-section">
                <div className="container flex Detail-container" id="second-Detail">
                    <div className="Detail-img">
                        <img src="/images/21.png" alt="" />
                    </div>
                    <div className="Detail-desc flex">
                        <h3>Required Information's</h3>
                        <p>In the process of Finding your best Career Path We required Some Information's for Example your Last Qualification,<br /> and Persantage of 10th 12th or last Qualification, your future intrest etc.</p>
                    </div>
                </div>
            </section>

            <section className="Detail-section">
                <div className="container flex Detail-container">
                    <div className="Detail-img">
                        <img src="/images/24.png" alt="" />
                    </div>
                    <div className="Detail-desc flex">
                        <h3>Steps for finding your Future study with Career Path.</h3><br /><br />
                        <p><b>Step 1:-</b> Fill all the Information in the Form.<br /><br />
                            <b>Step 2:-</b> Get Result acording to your choices.<br /><br />
                            <b>Step 3:-</b> Get Print out of the Result.<br /><br />
                            <b>Step 4:-</b> Any Dought than Contect Us.
                        </p>
                    </div>
                </div>
            </section>

            <section className="fill-now-section">
                <div className="container flex fill-now-section-container">
                    <h2>Find Your Career NOW</h2>
                    <p>Just Click on Login.</p>
                    {/*<a href="/form" className="primary-button">Start Now</a>*/}
                </div>
            </section>
            <Footer />
        </>
    </div>
  )
}
