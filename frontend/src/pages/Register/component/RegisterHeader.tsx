import { Link } from "react-router-dom";

function RegisterHeader() {
  return (
    <header className="bg-linear-to-r from-[#6E4E36] to-red-700/60 bg-cover bg-center py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-max">
        <Link
          to="/"
          className="text-sm flex items-center gap-3 font-medium text-[#FFFFFFCC] hover:underline"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 24.2002V17.978C19 17.7717 18.8595 17.5739 18.6095 17.428C18.3594 17.2821 18.0203 17.2002 17.6667 17.2002H12.3333C11.9797 17.2002 11.6406 17.2821 11.3905 17.428C11.1405 17.5739 11 17.7717 11 17.978V24.2002"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="3.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.7998 12.6664C3.79972 12.2979 3.88003 11.9338 4.03514 11.5995C4.19024 11.2652 4.41642 10.9688 4.69787 10.7309L13.5645 3.13217C14.0218 2.74572 14.6011 2.53369 15.1998 2.53369C15.7985 2.53369 16.3778 2.74572 16.8351 3.13217L25.7017 10.7309C25.9832 10.9688 26.2094 11.2652 26.3645 11.5995C26.5196 11.9338 26.5999 12.2979 26.5998 12.6664V24.0664C26.5998 24.7382 26.3329 25.3826 25.8578 25.8577C25.3827 26.3328 24.7384 26.5997 24.0665 26.5997H6.33314C5.66126 26.5997 5.01689 26.3328 4.5418 25.8577C4.06671 25.3826 3.7998 24.7382 3.7998 24.0664V12.6664Z"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="3.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* title area */}
      <div className="mt-6 text-center">
        <h1 className="text-[32px] sm:text-[40px] font-bold text-white">
          Application for Admission
        </h1>

        <p className="mt-4 text-[14px]md:text-[18px] text-white/80">
          Grace Bible Institute &amp; Seminary
        </p>
      </div>
    </header>
  );
}

export default RegisterHeader;
