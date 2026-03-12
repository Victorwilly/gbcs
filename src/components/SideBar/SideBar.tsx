import { NavLink } from "react-router-dom";
import dashboardLogo from "/images/dashboardLogo.png";

const SideBar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0549 3.35181H4.46879C3.85176 3.35181 3.35156 3.852 3.35156 4.46903V12.2896C3.35156 12.9066 3.85176 13.4068 4.46879 13.4068H10.0549C10.6719 13.4068 11.1721 12.9066 11.1721 12.2896V4.46903C11.1721 3.852 10.6719 3.35181 10.0549 3.35181Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.344 3.35181H16.7578C16.1408 3.35181 15.6406 3.852 15.6406 4.46903V7.8207C15.6406 8.43773 16.1408 8.93792 16.7578 8.93792H22.344C22.961 8.93792 23.4612 8.43773 23.4612 7.8207V4.46903C23.4612 3.852 22.961 3.35181 22.344 3.35181Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.344 13.4067H16.7578C16.1408 13.4067 15.6406 13.9069 15.6406 14.524V22.3445C15.6406 22.9615 16.1408 23.4617 16.7578 23.4617H22.344C22.961 23.4617 23.4612 22.9615 23.4612 22.3445V14.524C23.4612 13.9069 22.961 13.4067 22.344 13.4067Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0549 17.8755H4.46879C3.85176 17.8755 3.35156 18.3757 3.35156 18.9927V22.3444C3.35156 22.9614 3.85176 23.4616 4.46879 23.4616H10.0549C10.6719 23.4616 11.1721 22.9614 11.1721 22.3444V18.9927C11.1721 18.3757 10.6719 17.8755 10.0549 17.8755Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin"
    },
    {
      name: "Students",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.875 23.4616V21.2272C17.875 20.042 17.4042 18.9053 16.5661 18.0672C15.728 17.2291 14.5913 16.7583 13.4061 16.7583H6.70278C5.51756 16.7583 4.38088 17.2291 3.5428 18.0672C2.70472 18.9053 2.23389 20.042 2.23389 21.2272V23.4616"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.876 3.49487C18.8343 3.74331 19.683 4.30292 20.2888 5.08587C20.8947 5.86882 21.2234 6.83078 21.2234 7.82076C21.2234 8.81075 20.8947 9.77271 20.2888 10.5557C19.683 11.3386 18.8343 11.8982 17.876 12.1467"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.5792 23.4619V21.2275C24.5785 20.2373 24.2489 19.2754 23.6423 18.4929C23.0356 17.7103 22.1863 17.1513 21.2275 16.9038"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0543 12.2896C12.5224 12.2896 14.5232 10.2888 14.5232 7.8207C14.5232 5.3526 12.5224 3.35181 10.0543 3.35181C7.58624 3.35181 5.58545 5.3526 5.58545 7.8207C5.58545 10.2888 7.58624 12.2896 10.0543 12.2896Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/students"

    },
    {
      name: "Staff & Lecturers",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9305 12.2023C24.1305 12.1141 24.3002 11.9691 24.4187 11.7853C24.5371 11.6016 24.599 11.3872 24.5967 11.1686C24.5945 10.95 24.5281 10.7369 24.4059 10.5556C24.2838 10.3743 24.1111 10.2329 23.9093 10.1488L14.3336 5.78719C14.0425 5.65441 13.7262 5.58569 13.4063 5.58569C13.0863 5.58569 12.7701 5.65441 12.479 5.78719L2.90437 10.1444C2.70547 10.2315 2.53626 10.3747 2.41745 10.5564C2.29863 10.7382 2.23535 10.9506 2.23535 11.1677C2.23535 11.3849 2.29863 11.5973 2.41745 11.7791C2.53626 11.9608 2.70547 12.104 2.90437 12.1911L12.479 16.5572C12.7701 16.69 13.0863 16.7587 13.4063 16.7587C13.7262 16.7587 14.0425 16.69 14.3336 16.5572L23.9305 12.2023Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.5791 11.1721V17.8755"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.70312 13.9653V17.8756C6.70313 18.7645 7.40937 19.617 8.66649 20.2456C9.92361 20.8742 11.6286 21.2273 13.4065 21.2273C15.1843 21.2273 16.8893 20.8742 18.1464 20.2456C19.4036 19.617 20.1098 18.7645 20.1098 17.8756V13.9653"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/staffs"

    },
    {
      name: "Courses",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4062 7.82056V23.4617"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.35111 20.1102C3.0548 20.1102 2.77063 19.9924 2.56111 19.7829C2.35159 19.5734 2.23389 19.2892 2.23389 18.9929V4.46903C2.23389 4.17272 2.35159 3.88855 2.56111 3.67903C2.77063 3.46951 3.0548 3.35181 3.35111 3.35181H8.93723C10.1225 3.35181 11.2591 3.82263 12.0972 4.66071C12.9353 5.49879 13.4061 6.63548 13.4061 7.8207C13.4061 6.63548 13.8769 5.49879 14.715 4.66071C15.5531 3.82263 16.6898 3.35181 17.875 3.35181H23.4611C23.7574 3.35181 24.0416 3.46951 24.2511 3.67903C24.4606 3.88855 24.5784 4.17272 24.5784 4.46903V18.9929C24.5784 19.2892 24.4606 19.5734 24.2511 19.7829C24.0416 19.9924 23.7574 20.1102 23.4611 20.1102H16.7578C15.8689 20.1102 15.0164 20.4633 14.3878 21.0918C13.7592 21.7204 13.4061 22.5729 13.4061 23.4618C13.4061 22.5729 13.053 21.7204 12.4244 21.0918C11.7959 20.4633 10.9434 20.1102 10.0544 20.1102H3.35111Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/courses"

    },
    {
      name: "Timetables",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.93701 2.23462V6.70351"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.876 2.23462V6.70351"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.2271 4.46875H5.58601C4.35196 4.46875 3.35156 5.46915 3.35156 6.7032V22.3443C3.35156 23.5784 4.35196 24.5788 5.58601 24.5788H21.2271C22.4612 24.5788 23.4616 23.5784 23.4616 22.3443V6.7032C23.4616 5.46915 22.4612 4.46875 21.2271 4.46875Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.35156 11.1721H23.4616"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/timetables"

    },
    {
      name: "Fees & Payments",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4062 2.23462V24.5791"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9926 5.58643H10.6134C9.57634 5.58643 8.58174 5.9984 7.84842 6.73172C7.1151 7.46504 6.70313 8.45964 6.70312 9.49671C6.70313 10.5338 7.1151 11.5284 7.84842 12.2617C8.58174 12.995 9.57634 13.407 10.6134 13.407H16.1995C17.2366 13.407 18.2312 13.819 18.9645 14.5523C19.6978 15.2856 20.1098 16.2802 20.1098 17.3173C20.1098 18.3543 19.6978 19.3489 18.9645 20.0823C18.2312 20.8156 17.2366 21.2275 16.1995 21.2275H6.70312"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/feesandpayments"

    },
    {
      name: "Reports",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7587 2.23462H6.70369C6.11107 2.23462 5.54273 2.47003 5.12369 2.88907C4.70465 3.30811 4.46924 3.87645 4.46924 4.46907V22.3446C4.46924 22.9372 4.70465 23.5056 5.12369 23.9246C5.54273 24.3437 6.11107 24.5791 6.70369 24.5791H20.1104C20.703 24.5791 21.2713 24.3437 21.6904 23.9246C22.1094 23.5056 22.3448 22.9372 22.3448 22.3446V7.82074L16.7587 2.23462Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6406 2.23462V6.70351C15.6406 7.29612 15.876 7.86447 16.2951 8.28351C16.7141 8.70255 17.2825 8.93796 17.8751 8.93796H22.344"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1715 10.0552H8.93701"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8748 14.5239H8.93701"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8748 18.9929H8.93701"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/reports"

    },
    {
      name: "Announcements",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4712 23.4617C11.6673 23.8013 11.9494 24.0834 12.289 24.2795C12.6287 24.4756 13.014 24.5788 13.4062 24.5788C13.7984 24.5788 14.1837 24.4756 14.5234 24.2795C14.8631 24.0834 15.1451 23.8013 15.3413 23.4617"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.64444 17.1227C3.49849 17.2827 3.40217 17.4816 3.3672 17.6953C3.33224 17.909 3.36012 18.1283 3.44748 18.3264C3.53483 18.5246 3.67788 18.6931 3.85923 18.8114C4.04058 18.9297 4.2524 18.9928 4.46895 18.993H22.3445C22.561 18.993 22.7729 18.9302 22.9544 18.8121C23.1358 18.694 23.2791 18.5257 23.3667 18.3277C23.4542 18.1297 23.4824 17.9105 23.4477 17.6968C23.413 17.483 23.317 17.284 23.1713 17.1239C21.6854 15.5921 20.1101 13.9643 20.1101 8.93796C20.1101 7.16012 19.4038 5.4551 18.1467 4.19798C16.8896 2.94086 15.1846 2.23462 13.4067 2.23462C11.6289 2.23462 9.92388 2.94086 8.66676 4.19798C7.40964 5.4551 6.70339 7.16012 6.70339 8.93796C6.70339 13.9643 5.12699 15.5921 3.64444 17.1227Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/announcements"

    },
    {
      name: "Hostel Management",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_164_3848)">
            <path
              d="M20.1104 2.23486H6.70369C5.46963 2.23486 4.46924 3.23526 4.46924 4.46931V22.3449C4.46924 23.5789 5.46963 24.5793 6.70369 24.5793H20.1104C21.3444 24.5793 22.3448 23.5789 22.3448 22.3449V4.46931C22.3448 3.23526 21.3444 2.23486 20.1104 2.23486Z"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.0547 24.579V20.1101H16.758V24.579"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.93701 6.70361H8.94761"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.876 6.70361H17.8866"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4062 6.70361H13.4168"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4062 11.1724H13.4168"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4062 15.6414H13.4168"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.876 11.1724H17.8866"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.876 15.6414H17.8866"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.93701 11.1724H8.94761"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.93701 15.6414H8.94761"
              stroke="#4B5563"
              stroke-width="2.68134"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_164_3848">
              <rect width="26.8134" height="26.8134" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      url: "/dashboard/admin/hostelmanagement"

    },
    {
      name: "Settings",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6525 2.23462H13.1609C12.5683 2.23462 11.9999 2.47003 11.5809 2.88907C11.1619 3.30811 10.9264 3.87645 10.9264 4.46907V4.67017C10.926 5.062 10.8226 5.44685 10.6265 5.78609C10.4304 6.12533 10.1486 6.40704 9.80922 6.60296L9.32882 6.88227C8.98914 7.07838 8.60382 7.18163 8.21159 7.18163C7.81937 7.18163 7.43405 7.07838 7.09437 6.88227L6.92679 6.79289C6.41405 6.49712 5.80491 6.41688 5.23308 6.56979C4.66124 6.7227 4.17345 7.09626 3.87677 7.60846L3.63098 8.03301C3.33521 8.54574 3.25497 9.15488 3.40788 9.72672C3.56079 10.2986 3.93434 10.7863 4.44655 11.083L4.61413 11.1948C4.95184 11.3897 5.23265 11.6697 5.42865 12.0068C5.62464 12.3439 5.729 12.7264 5.73136 13.1164V13.6862C5.73292 14.0799 5.63042 14.467 5.43423 14.8084C5.23803 15.1498 4.95512 15.4333 4.61413 15.6301L4.44655 15.7307C3.93434 16.0274 3.56079 16.5152 3.40788 17.087C3.25497 17.6588 3.33521 18.268 3.63098 18.7807L3.87677 19.2052C4.17345 19.7174 4.66124 20.091 5.23308 20.2439C5.80491 20.3968 6.41405 20.3166 6.92679 20.0208L7.09437 19.9314C7.43405 19.7353 7.81937 19.6321 8.21159 19.6321C8.60382 19.6321 8.98914 19.7353 9.32882 19.9314L9.80922 20.2107C10.1486 20.4067 10.4304 20.6884 10.6265 21.0276C10.8226 21.3669 10.926 21.7517 10.9264 22.1435V22.3446C10.9264 22.9372 11.1619 23.5056 11.5809 23.9246C11.9999 24.3437 12.5683 24.5791 13.1609 24.5791H13.6525C14.2451 24.5791 14.8134 24.3437 15.2325 23.9246C15.6515 23.5056 15.8869 22.9372 15.8869 22.3446V22.1435C15.8873 21.7517 15.9908 21.3669 16.1868 21.0276C16.3829 20.6884 16.6648 20.4067 17.0041 20.2107L17.4845 19.9314C17.8242 19.7353 18.2095 19.6321 18.6018 19.6321C18.994 19.6321 19.3793 19.7353 19.719 19.9314L19.8866 20.0208C20.3993 20.3166 21.0085 20.3968 21.5803 20.2439C22.1521 20.091 22.6399 19.7174 22.9366 19.2052L23.1824 18.7695C23.4782 18.2568 23.5584 17.6476 23.4055 17.0758C23.2526 16.504 22.879 16.0162 22.3668 15.7195L22.1992 15.6301C21.8582 15.4333 21.5753 15.1498 21.3791 14.8084C21.1829 14.467 21.0804 14.0799 21.082 13.6862V13.1275C21.0804 12.7338 21.1829 12.3467 21.3791 12.0053C21.5753 11.6639 21.8582 11.3804 22.1992 11.1836L22.3668 11.083C22.879 10.7863 23.2526 10.2986 23.4055 9.72672C23.5584 9.15488 23.4782 8.54574 23.1824 8.03301L22.9366 7.60846C22.6399 7.09626 22.1521 6.7227 21.5803 6.56979C21.0085 6.41688 20.3993 6.49712 19.8866 6.79289L19.719 6.88227C19.3793 7.07838 18.994 7.18163 18.6018 7.18163C18.2095 7.18163 17.8242 7.07838 17.4845 6.88227L17.0041 6.60296C16.6648 6.40704 16.3829 6.12533 16.1868 5.78609C15.9908 5.44685 15.8873 5.062 15.8869 4.67017V4.46907C15.8869 3.87645 15.6515 3.30811 15.2325 2.88907C14.8134 2.47003 14.2451 2.23462 13.6525 2.23462Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4064 16.7585C15.2574 16.7585 16.758 15.2579 16.758 13.4068C16.758 11.5558 15.2574 10.0552 13.4064 10.0552C11.5553 10.0552 10.0547 11.5558 10.0547 13.4068C10.0547 15.2579 11.5553 16.7585 13.4064 16.7585Z"
            stroke="#4B5563"
            stroke-width="2.68134"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      url: "/dashboard/admin/settings"

    },
  ];

  return (
    <aside className="w-full sticky top-0 md:w-64 lg:w-72 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* header */}
      <div className="px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            aria-hidden
          >
            <img
              src={dashboardLogo}
              alt="Dashboard Logo"
              className="w-full h-full"
            />
          </div>
          <div className="hidden md:block">
            <h2 className="text-sm font-bold text-gray-900">GRACE BIBLE</h2>
            <p className="text-xs text-gray-600">Institute & Seminary</p>
          </div>
        </div>
      </div>

      {/* admin user section */}
      <div className="bg-[#800020] text-white py-5 px-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center font-bold text-lg shrink-0">
            A
          </div>
          <div>
            <p className="text-[17px] font-semibold">Admin User</p>
            <p className="text-[14px] opacity-80">Administrator</p>
          </div>
        </div>
      </div>

      {/* menu items */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 px-4 py-2  bg-[#80002014] rounded-lg transition-colors text-sm"
                    : "flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#80002014] rounded-lg transition-colors text-sm"
                }
              >
                <div className="w-6 h-6" aria-hidden>
                  {item.icon}
                </div>
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden text-xs">
                  {item.name.split(" ")[0]}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* logout button */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
          <div className="w-6 h-6 shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.876 18.9925L23.4621 13.4064L17.876 7.82031"
                stroke="#DC2626"
                stroke-width="2.68134"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.4619 13.4065H10.0552"
                stroke="#DC2626"
                stroke-width="2.68134"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0549 23.4616H5.58601C4.9934 23.4616 4.42506 23.2262 4.00602 22.8071C3.58698 22.3881 3.35156 21.8197 3.35156 21.2271V5.58601C3.35156 4.9934 3.58698 4.42506 4.00602 4.00602C4.42506 3.58698 4.9934 3.35156 5.58601 3.35156H10.0549"
                stroke="#DC2626"
                stroke-width="2.68134"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="hidden sm:inline">Logout</span>
          <span className="sm:hidden text-xs">Log</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
