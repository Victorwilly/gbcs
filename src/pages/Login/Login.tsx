import LoginHeader from "./component/LoginHeader";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fff8e7]">
      <LoginHeader />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#FFFFFF] p-4 md:p-10 rounded-2xl">
          {/* heading */}
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-bold text-[#111827] mb-2">
              Select Your Role
            </h1>
            <p className="text-[#4B5563] text-sm sm:text-base">
              Choose how you want to access the portal
            </p>
          </div>

          {/* role cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Administrator */}
            <div className="bg-[#800020] rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-62.5 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="w-18 h-18 bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center mb-4">
                {/* shield icon placeholder */}
                <div className="w-12 h-12 rounded" aria-hidden>
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.4606 24.9999C38.4606 34.6153 31.7299 39.423 23.7299 42.2115C23.311 42.3534 22.8559 42.3466 22.4414 42.1922C14.4222 39.423 7.69141 34.6153 7.69141 24.9999V11.5384C7.69141 11.0284 7.89402 10.5392 8.25466 10.1786C8.61531 9.81792 9.10445 9.61531 9.61448 9.61531C13.4606 9.61531 18.2683 7.30762 21.6145 4.38454C22.0219 4.03646 22.5402 3.84521 23.076 3.84521C23.6119 3.84521 24.1301 4.03646 24.5376 4.38454C27.9029 7.32685 32.6914 9.61531 36.5376 9.61531C37.0476 9.61531 37.5367 9.81792 37.8974 10.1786C38.258 10.5392 38.4606 11.0284 38.4606 11.5384V24.9999Z"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Administrator
              </h2>
              <p className="text-white/80 text-sm">
                Manage institution operations
              </p>
            </div>

            {/* Student */}
            <div className="bg-[#D4AF37] rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-62.5 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="w-18 h-18 bg-[rgba(255,255,255,0.3)] rounded-full flex items-center justify-center mb-4">
                {/* graduation cap icon placeholder */}
                <div className="w-12 h-12  rounded" aria-hidden>
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.1915 21.0034C41.5358 20.8515 41.828 20.602 42.0318 20.2857C42.2356 19.9694 42.3422 19.6003 42.3383 19.2241C42.3344 18.8478 42.2202 18.481 42.0099 18.169C41.7996 17.857 41.5023 17.6135 41.155 17.4688L24.6723 9.9611C24.1712 9.73254 23.6269 9.61426 23.0762 9.61426C22.5254 9.61426 21.9811 9.73254 21.48 9.9611L4.99924 17.4611C4.65687 17.611 4.36561 17.8575 4.16109 18.1704C3.95658 18.4832 3.84766 18.8489 3.84766 19.2226C3.84766 19.5964 3.95658 19.9621 4.16109 20.2749C4.36561 20.5878 4.65687 20.8342 4.99924 20.9842L21.48 28.4996C21.9811 28.7281 22.5254 28.8464 23.0762 28.8464C23.6269 28.8464 24.1712 28.7281 24.6723 28.4996L41.1915 21.0034Z"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M42.3066 19.231V30.7694"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.5371 24.0381V30.7689C11.5371 32.299 12.7528 33.7664 14.9166 34.8483C17.0805 35.9303 20.0154 36.5381 23.0756 36.5381C26.1358 36.5381 29.0706 35.9303 31.2345 34.8483C33.3984 33.7664 34.614 32.299 34.614 30.7689V24.0381"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#FFFFFFCC] mb-2">
                Student
              </h2>
              <p className="text-[#FFFFFFCC] text-sm">
                Access your academic portal
              </p>
            </div>

            {/* Lecturer */}
            <div className="bg-[#2D5016] rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-62.5 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="w-18 h-18 bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center mb-4">
                {/* user icon placeholder */}
                <div className="w-12 h-12 rounded" aria-hidden>
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.7688 40.3842V36.538C30.7688 34.4979 29.9583 32.5413 28.5158 31.0987C27.0732 29.6561 25.1166 28.8457 23.0765 28.8457H11.538C9.49788 28.8457 7.54132 29.6561 6.09873 31.0987C4.65614 32.5413 3.8457 34.4979 3.8457 36.538V40.3842"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30.7695 6.01562C32.4191 6.44326 33.8799 7.40652 34.9228 8.75421C35.9656 10.1019 36.5315 11.7577 36.5315 13.4618C36.5315 15.1658 35.9656 16.8217 34.9228 18.1694C33.8799 19.517 32.4191 20.4803 30.7695 20.9079"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M42.3083 40.3842V36.538C42.307 34.8336 41.7397 33.178 40.6955 31.8309C39.6513 30.4839 38.1893 29.5218 36.5391 29.0957"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.3056 21.1541C21.5539 21.1541 24.9979 17.7102 24.9979 13.4618C24.9979 9.21349 21.5539 5.76953 17.3056 5.76953C13.0572 5.76953 9.61328 9.21349 9.61328 13.4618C9.61328 17.7102 13.0572 21.1541 17.3056 21.1541Z"
                      stroke="white"
                      stroke-width="2.88462"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Lecturer
              </h2>
              <p className="text-white/80 text-sm">
                Manage courses and students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
