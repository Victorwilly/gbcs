import { Link } from "react-router-dom";
import footerLogo from "/images/footerLogo.png";

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* logo & tagline */}
        <div className="space-y-4">
          <Link to="/" aria-label="back to home footer link">
            <div className="w-65 md:w-47.5 h-max">
              <img
                aria-hidden
                src={footerLogo}
                alt="Grace Bible Institute & Seminary Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Link>

          <p className="text-xs md:text-[14px] py-3">
            &quot;Raising watchmen, equipping ministers, transforming
            lives.&quot;
          </p>
          <div className="flex space-x-3">
            <Link
              to="/"
              className="w-12 h-12 flex justify-center items-center border-2 border-[#FFFFFF] rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9997 2.66675H19.9997C18.2316 2.66675 16.5359 3.36913 15.2856 4.61937C14.0354 5.86961 13.333 7.5653 13.333 9.33341V13.3334H9.33301V18.6667H13.333V29.3334H18.6663V18.6667H22.6663L23.9997 13.3334H18.6663V9.33341C18.6663 8.97979 18.8068 8.64065 19.0569 8.39061C19.3069 8.14056 19.6461 8.00008 19.9997 8.00008H23.9997V2.66675Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/"
              className="w-12 h-12 flex justify-center items-center border-2 border-[#FFFFFF] rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3337 5.3332C29.3337 5.3332 28.4003 8.1332 26.667 9.86653C28.8003 23.1999 14.1337 32.9332 2.66699 25.3332C5.60033 25.4665 8.53366 24.5332 10.667 22.6665C4.00033 20.6665 0.666992 12.7999 4.00033 6.66653C6.93366 10.1332 11.467 12.1332 16.0003 11.9999C14.8003 6.39987 21.3337 3.19987 25.3337 6.9332C26.8003 6.9332 29.3337 5.3332 29.3337 5.3332Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/"
              className="w-12 h-12 flex justify-center items-center border-2 border-[#FFFFFF] rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.667 2.66675H9.33366C5.65176 2.66675 2.66699 5.65152 2.66699 9.33341V22.6667C2.66699 26.3486 5.65176 29.3334 9.33366 29.3334H22.667C26.3489 29.3334 29.3337 26.3486 29.3337 22.6667V9.33341C29.3337 5.65152 26.3489 2.66675 22.667 2.66675Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.3336 15.1599C21.4981 16.2696 21.3086 17.4029 20.7919 18.3986C20.2753 19.3943 19.4578 20.2018 18.4558 20.7061C17.4537 21.2105 16.3182 21.386 15.2106 21.2078C14.1031 21.0296 13.0799 20.5067 12.2867 19.7135C11.4935 18.9202 10.9706 17.8971 10.7924 16.7895C10.6141 15.682 10.7897 14.5464 11.294 13.5444C11.7984 12.5424 12.6058 11.7249 13.6016 11.2082C14.5973 10.6916 15.7306 10.502 16.8403 10.6666C17.9722 10.8344 19.0201 11.3619 19.8292 12.171C20.6383 12.9801 21.1657 14.028 21.3336 15.1599Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.333 8.66675H23.3463"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/"
              className="w-12 h-12 flex justify-center items-center border-2 border-[#FFFFFF] rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33334 22.6667C2.40191 18.271 2.40191 13.729 3.33334 9.33333C3.45573 8.88695 3.69219 8.4801 4.01948 8.15281C4.34678 7.82552 4.75362 7.58905 5.20001 7.46667C12.3513 6.28194 19.6487 6.28194 26.8 7.46667C27.2464 7.58905 27.6532 7.82552 27.9805 8.15281C28.3078 8.4801 28.5443 8.88695 28.6667 9.33333C29.5981 13.729 29.5981 18.271 28.6667 22.6667C28.5443 23.1131 28.3078 23.5199 27.9805 23.8472C27.6532 24.1745 27.2464 24.4109 26.8 24.5333C19.6488 25.7183 12.3513 25.7183 5.20001 24.5333C4.75362 24.4109 4.34678 24.1745 4.01948 23.8472C3.69219 23.5199 3.45573 23.1131 3.33334 22.6667Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.333 20L19.9997 16L13.333 12V20Z"
                  stroke="#9CA3AF"
                  stroke-width="3.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* contact us */}
        <div>
          <h3 className=" font-semibold tracking-[-0.15px] text-[#D4AF37] md:text-[24px] mb-5.5">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.5C15 11.2448 10.8457 15.1447 9.45075 16.3492C9.32079 16.447 9.1626 16.4998 9 16.4998C8.8374 16.4998 8.67921 16.447 8.54925 16.3492C7.15425 15.1447 3 11.2448 3 7.5C3 5.9087 3.63214 4.38258 4.75736 3.25736C5.88258 2.13214 7.4087 1.5 9 1.5C10.5913 1.5 12.1174 2.13214 13.2426 3.25736C14.3679 4.38258 15 5.9087 15 7.5Z"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="w-full">
                <div>25 Inyang Edem Street</div>
                <div>P.O. Box 798, Calabar</div>
                <div>Cross River State,</div>
                Nigeria
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_57_166)">
                  <path
                    d="M10.374 12.426C10.5289 12.4971 10.7034 12.5134 10.8688 12.4721C11.0341 12.4308 11.1805 12.3344 11.2838 12.1987L11.55 11.85C11.6897 11.6637 11.8709 11.5125 12.0792 11.4084C12.2875 11.3042 12.5171 11.25 12.75 11.25H15C15.3978 11.25 15.7794 11.408 16.0607 11.6893C16.342 11.9706 16.5 12.3522 16.5 12.75V15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5C11.4196 16.5 7.9858 15.0777 5.45406 12.5459C2.92232 10.0142 1.5 6.58042 1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H5.25C5.64782 1.5 6.02936 1.65804 6.31066 1.93934C6.59196 2.22064 6.75 2.60218 6.75 3V5.25C6.75 5.48287 6.69578 5.71254 6.59164 5.92082C6.4875 6.1291 6.33629 6.31028 6.15 6.45L5.799 6.71325C5.66131 6.81838 5.56426 6.96794 5.52434 7.13651C5.48442 7.30509 5.50409 7.48228 5.58 7.638C6.60501 9.7199 8.29082 11.4036 10.374 12.426Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_166">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              08033147692, 08130975458
            </li>
            <li className="flex items-start gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_57_171)">
                  <path
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 1.5C7.07418 3.52212 6 6.20756 6 9C6 11.7924 7.07418 14.4779 9 16.5C10.9258 14.4779 12 11.7924 12 9C12 6.20756 10.9258 3.52212 9 1.5Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.5 9H16.5"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_171">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              www.wowi.net
            </li>
            <li className="flex items-start gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              info@gbsi.edu.ng
            </li>
          </ul>
        </div>

        {/* quick links */}
        <div>
          <h3 className=" font-semibold tracking-[-0.15px] text-[#D4AF37] md:text-[24px] mb-5.5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/programs">Academic Programs</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/portal/student">Student Portal</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* affiliations */}
        <div>
          <h3 className=" font-semibold tracking-[-0.15px] text-[#D4AF37] md:text-[24px] mb-5.5">
            Affiliations
          </h3>
          <ul className="space-y-3 text-sm">
            <li>International Victory Bible Institute</li>
            <li>Wycliffe University &amp; ATS</li>
            <li>Harvestime Network International</li>
            <li>College of Chaplaincy and Social Sciences</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t-2 flex flex-col gap-4 border-gray-700 pt-6 text-center text-xs text-gray-400">
        <span>
          © 2026 Grace Bible Institute &amp; Seminary. All rights reserved.
        </span>

        <span>CAC/IT/NO.34889</span>
      </div>
    </footer>
  );
}

export default Footer;
