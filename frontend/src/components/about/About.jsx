import React from "react";

function About() {
  return (
    <>
      <h1 className="text-3xl text-slate-500 text-center my-8 font-serif font-bold">
        About Us
      </h1>
      <div className="flex flex-wrap w-3/4 mx-auto my-4  justify-center">
        <p className="text-slate-600">
          At MM News website, we are dedicated to providing you with timely and
          accurate news coverage from around the world. Our team of experienced
          journalists and editors is committed to delivering high-quality,
          unbiased information to keep you informed and engaged.
        </p>
        <div className="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3">Our Mission</h1>
          <p className="text-slate-600">
            Our mission is to empower individuals with knowledge and foster an
            informed society. We believe that access to reliable news is crucial
            for making informed decisions and understanding the world we live
            in. Through our news website, we strive to present news stories that
            are objective, fair, and comprehensive.
          </p>
        </div>
        <div className="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3">
            Expertise and Credibility
          </h1>
          <p className="text-slate-600">
            At MM News website, we pride ourselves on the expertise and
            credibility of our news team. Our journalists have a wealth of
            experience in reporting on various topics, including politics,
            business, technology, health, and more. We hold ourselves to the
            highest journalistic standards, ensuring that our content is
            thoroughly researched, fact-checked, and verified.
          </p>
        </div>
        <div className="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3">Topics We Cover</h1>
          <p className="text-slate-600">
            ur news website covers a wide range of topics to cater to diverse
            interests and provide a comprehensive news experience. From breaking
            news to in-depth analysis, we deliver stories on local, national,
            and international events. Our team of reporters is passionate about
            bringing you the latest updates, thought-provoking features, and
            exclusive interviews.
          </p>
        </div>
        <div cclassName="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3 text-center">
            Our Values
          </h1>
          <p className="text-slate-600">
            Integrity, accuracy, and transparency are the core values that drive
            us. We believe in the power of honest journalism to create positive
            change and hold those in power accountable. Our commitment to
            journalistic ethics ensures that our readers receive news they can
            rely on.
          </p>
        </div>
        <div className="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3">Get in Touch</h1>
          <p className="text-slate-600">
            We value our readers' feedback and encourage you to reach out to us.
            Whether you have a news tip, a suggestion, or a question, we are
            here to listen. You can contact us through the provided email
            address or by using our convenient contact form.
          </p>
        </div>
        <div className="my-4 flex flex-wrap justify-center">
          <h1 className="text-2xl text-slate-700 mb-3">Meet Our Team</h1>
          <p className="text-slate-600">
            We have assembled a talented and diverse team of journalists,
            editors, and contributors who are passionate about bringing you the
            most compelling news stories. Visit our "Meet the Team" section to
            learn more about the individuals behind our news website and their
            expertise. Thank you for choosing [News Website Name] as your
            trusted source of news. We are honored to serve you and look forward
            to keeping you informed with accurate, reliable, and
            thought-provoking journalism.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;
