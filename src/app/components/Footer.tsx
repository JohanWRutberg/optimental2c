import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002444] border-t">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <strong className="block text-center text-xl font-bold text-white sm:text-3xl">
              Frågor på det?
            </strong>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium natus quod eveniet aut perferendis distinctio iusto
                repudiandae, provident velit earum?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-bold text-white"> Services </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      Marketing{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      Graphic Design
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      App Development
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      Web Development
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="font-bold text-white"> About </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      Our Team{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="font-bold text-white"> Support </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-secondary"
                      href="/"
                    >
                      {" "}
                      Live Chat{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed text-white">
              © Optimental 2023. All rights reserved. .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
