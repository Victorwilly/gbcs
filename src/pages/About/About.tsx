export default function About() {
  const institutionalGoals = [
    {
      title: "Affiliated to:",
      description:
        "International Victory Bible Institute (Tulsa, Oklahoma, USA)",
    },
    {
      title: "Member:",
      description: "Wholesome Words Mission International Inc.",
    },
    {
      title: "Established:",
      description: "September 1994",
    },
    {
      title: "Location:",
      description: "25 Inyang Edem Street, Calabar, Cross River State, Nigeria",
    },
  ];

  const philosophy = [
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V16Z"
            fill="#EFF6FF"
          />
          <path
            d="M18.6665 36.7499V19.2499C18.6665 18.4764 18.9738 17.7345 19.5208 17.1875C20.0678 16.6405 20.8096 16.3333 21.5832 16.3333H36.1665C36.4759 16.3333 36.7727 16.4562 36.9915 16.675C37.2103 16.8938 37.3332 17.1905 37.3332 17.4999V38.4999C37.3332 38.8093 37.2103 39.1061 36.9915 39.3249C36.7727 39.5437 36.4759 39.6666 36.1665 39.6666H21.5832C20.8096 39.6666 20.0678 39.3593 19.5208 38.8123C18.9738 38.2653 18.6665 37.5235 18.6665 36.7499ZM18.6665 36.7499C18.6665 35.9764 18.9738 35.2345 19.5208 34.6875C20.0678 34.1405 20.8096 33.8333 21.5832 33.8333H37.3332"
            stroke="#2563EB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Content",
      description:
        "Structured biblical and theological knowledge through lectures, textbooks, assignments, and research.",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V16Z"
            fill="#F0FDF4"
          />
          <path
            d="M32.6668 38.5V36.1667C32.6668 34.929 32.1752 33.742 31.3 32.8668C30.4248 31.9917 29.2378 31.5 28.0002 31.5H21.0002C19.7625 31.5 18.5755 31.9917 17.7003 32.8668C16.8252 33.742 16.3335 34.929 16.3335 36.1667V38.5"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.6665 17.6494C33.6672 17.9088 34.5535 18.4932 35.1861 19.3108C35.8188 20.1284 36.1621 21.133 36.1621 22.1667C36.1621 23.2005 35.8188 24.2051 35.1861 25.0227C34.5535 25.8403 33.6672 26.4246 32.6665 26.6841"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M39.6665 38.4999V36.1666C39.6657 35.1326 39.3216 34.1282 38.6881 33.311C38.0546 32.4938 37.1677 31.9101 36.1665 31.6516"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.5002 26.8333C27.0775 26.8333 29.1668 24.744 29.1668 22.1667C29.1668 19.5893 27.0775 17.5 24.5002 17.5C21.9228 17.5 19.8335 19.5893 19.8335 22.1667C19.8335 24.744 21.9228 26.8333 24.5002 26.8333Z"
            stroke="#16A34A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Application",
      description:
        "Practical ministry experience through mentorship, practicum, fieldwork, and supervised ministry.",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16V40C56 48.8366 48.8366 56 40 56H16C7.16344 56 0 48.8366 0 40V16Z"
            fill="#FAF5FF"
          />
          <path
            d="M36.1668 30.3333C37.9052 28.63 39.6668 26.5883 39.6668 23.9167C39.6668 22.2149 38.9908 20.5828 37.7874 19.3794C36.5841 18.176 34.952 17.5 33.2502 17.5C31.1968 17.5 29.7502 18.0833 28.0002 19.8333C26.2502 18.0833 24.8035 17.5 22.7502 17.5C21.0484 17.5 19.4163 18.176 18.2129 19.3794C17.0095 20.5828 16.3335 22.2149 16.3335 23.9167C16.3335 26.6 18.0835 28.6417 19.8335 30.3333L28.0002 38.5L36.1668 30.3333Z"
            stroke="#9333EA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Reflection",
      description:
        "Personal and ministerial reflection through journaling and integration of academic learning with life experience.",
    },
  ];

  const distinctives = [
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
            fill="#800020"
            fill-opacity="0.1"
          />
          <path
            d="M21.3335 42.0001V22.0001C21.3335 21.116 21.6847 20.2682 22.3098 19.6431C22.9349 19.0179 23.7828 18.6667 24.6668 18.6667H41.3335C41.6871 18.6667 42.0263 18.8072 42.2763 19.0573C42.5264 19.3073 42.6668 19.6465 42.6668 20.0001V44.0001C42.6668 44.3537 42.5264 44.6928 42.2763 44.9429C42.0263 45.1929 41.6871 45.3334 41.3335 45.3334H24.6668C23.7828 45.3334 22.9349 44.9822 22.3098 44.3571C21.6847 43.732 21.3335 42.8841 21.3335 42.0001ZM21.3335 42.0001C21.3335 41.116 21.6847 40.2682 22.3098 39.6431C22.9349 39.0179 23.7828 38.6667 24.6668 38.6667H42.6668"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Bible-Based",
      description: "Scripture is the foundation of all teaching and truth",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
            fill="#800020"
            fill-opacity="0.1"
          />
          <path
            d="M41.3332 34.6667C43.3198 32.72 45.3332 30.3867 45.3332 27.3333C45.3332 25.3884 44.5606 23.5232 43.1853 22.1479C41.81 20.7726 39.9448 20 37.9998 20C35.6532 20 33.9998 20.6667 31.9998 22.6667C29.9998 20.6667 28.3465 20 25.9998 20C24.0549 20 22.1897 20.7726 20.8144 22.1479C19.4391 23.5232 18.6665 25.3884 18.6665 27.3333C18.6665 30.4 20.6665 32.7333 22.6665 34.6667L31.9998 44L41.3332 34.6667Z"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Christ-Centered",
      description: "Christ is the focus of education, life, and ministry",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
            fill="#800020"
            fill-opacity="0.1"
          />
          <path
            d="M37.3332 44V41.3333C37.3332 39.9188 36.7713 38.5623 35.7711 37.5621C34.7709 36.5619 33.4143 36 31.9998 36H23.9998C22.5853 36 21.2288 36.5619 20.2286 37.5621C19.2284 38.5623 18.6665 39.9188 18.6665 41.3333V44"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M37.3335 20.1707C38.4772 20.4671 39.49 21.135 40.2131 22.0694C40.9361 23.0038 41.3284 24.1518 41.3284 25.3333C41.3284 26.5148 40.9361 27.6628 40.2131 28.5972C39.49 29.5316 38.4772 30.1995 37.3335 30.496"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M45.3335 44V41.3333C45.3326 40.1516 44.9393 39.0037 44.2153 38.0698C43.4913 37.1358 42.4777 36.4688 41.3335 36.1733"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.9998 30.6667C30.9454 30.6667 33.3332 28.2789 33.3332 25.3333C33.3332 22.3878 30.9454 20 27.9998 20C25.0543 20 22.6665 22.3878 22.6665 25.3333C22.6665 28.2789 25.0543 30.6667 27.9998 30.6667Z"
            stroke="#800020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "People-Oriented",
      description: "Ministry is about transforming lives and serving people",
    },
  ];

  const aims = [
    {
      description: "To prepare men and women for effective Christian service",
    },
    {
      description: "To promote biblical evangelism and gospel preaching",
    },
    {
      description: "To train pastors and church leaders",
    },
    {
      description: "To develop spiritually mature Christian character",
    },
    {
      description:
        "To organize seminars, revivals, crusades, workshops, and conferences",
    },
  ];

  const accreditations = [
    {
      title: "International Affiliations",
      items: [
        "Accredits from various international bodies",
        "Partnership with mission organizations across continents",
        "Recognition from professional theological associations",
        "Collaboration with leading theological institutions Worldwide",
      ],
    },
    {
      title: "Local Affiliation",
      items: [
        "Affiliated with national Christian organizations",
        "Recognized by Department of Education, State Agents",
        "Partnership with local church denominations",
        "Engagement with community development initiatives",
      ],
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 px-4 md:px-6 lg:px-8 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About GBIS</h1>
          <p className="text-red-100 text-lg">
            Training the Whole Man for the Whole Man since 1994
          </p>
        </div>
      </section>

      {/* Who We Are & Institutional Goals */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Grace Bible Institute & Seminary operates under the auspices
                of Wholesome Words Mission International (WWOMI) and is
                affiliated with reputable international and local institutions.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Established in September 1994, GBIS exists to equip God-called
                men and women with biblical knowledge, holiness of life, and
                ministerial competence for global impact.
              </p>
            </div>

            {/* Institutional Goals */}
            <div className="bg-[#FAF6F0] shadow-sm p-3 md:p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Institutional Goals
              </h2>
              <div className="space-y-6">
                {institutionalGoals.map((goal, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1 flex justify-center rounded-full shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_11_1721)">
                          <path
                            d="M18.1673 8.33357C18.5479 10.2013 18.2767 12.1431 17.3989 13.8351C16.5211 15.527 15.0897 16.8669 13.3436 17.6313C11.5975 18.3957 9.64203 18.5384 7.80342 18.0355C5.96482 17.5327 4.35417 16.4147 3.24007 14.8681C2.12597 13.3214 1.57577 11.4396 1.68123 9.53639C1.78668 7.63318 2.5414 5.82364 3.81955 4.40954C5.09769 2.99545 6.82199 2.06226 8.70489 1.76561C10.5878 1.46897 12.5155 1.82679 14.1665 2.7794"
                            stroke="#2D5016"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 9.16683L10 11.6668L18.3333 3.3335"
                            stroke="#2D5016"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_1721">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-[#FEF8E6] md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg border border-white">
              <div className="flex justify-center items-center rounded-full bg-[#8000201A] w-max p-2 mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40544 14.4059C2.30821 14.144 2.30821 13.8559 2.40544 13.5939C3.35243 11.2978 4.95988 9.33448 7.02401 7.95298C9.08814 6.57148 11.516 5.83398 13.9998 5.83398C16.4836 5.83398 18.9114 6.57148 20.9755 7.95298C23.0397 9.33448 24.6471 11.2978 25.5941 13.5939C25.6913 13.8559 25.6913 14.144 25.5941 14.4059C24.6471 16.7021 23.0397 18.6654 20.9755 20.0469C18.9114 21.4284 16.4836 22.1659 13.9998 22.1659C11.516 22.1659 9.08814 21.4284 7.02401 20.0469C4.95988 18.6654 3.35243 16.7021 2.40544 14.4059Z"
                    stroke="#800020"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
                    stroke="#800020"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#800020]">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To raise spiritually sound, biblically grounded, and practically
                equipped ministers for the transformation of lives and nations.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg border border-white">
              <div className="flex justify-center items-center rounded-full bg-[#D4AF371A] w-max p-2 mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0002 25.6668C20.4435 25.6668 25.6668 20.4435 25.6668 14.0002C25.6668 7.55684 20.4435 2.3335 14.0002 2.3335C7.55684 2.3335 2.3335 7.55684 2.3335 14.0002C2.3335 20.4435 7.55684 25.6668 14.0002 25.6668Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.9998 16.3332C15.2885 16.3332 16.3332 15.2885 16.3332 13.9998C16.3332 12.7112 15.2885 11.6665 13.9998 11.6665C12.7112 11.6665 11.6665 12.7112 11.6665 13.9998C11.6665 15.2885 12.7112 16.3332 13.9998 16.3332Z"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#800020]">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide quality theological and ministerial education that
                develops the whole person—spiritually, intellectually, and
                practically—for effective Christian service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5 text-[#6F4E37] tracking-[-0.3px]">
            Educational Philosophy
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
            Our approach to education integrates three essential pillars
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-6.25 md:mt-12.5 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="shadow-lg p-5 rounded-lg">
                <div className="text-5xl mb-6 md:mb-12">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 md:mb-7.75 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[#4B5563]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Distinctives */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-[40px] font-bold text-center mb-5 text-[#6F4E37] tracking-[-0.3px]">
            Educational Distinctives
          </h2>

          <p className="text-center text-[#6F4E37] text-base md:text-[18px]">
            GBIS operates on a three-fold educational model that ensures
            holistic development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12.5">
            {distinctives.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center rounded-lg border-gray-200"
              >
                <div className="w-full flex justify-center">
                  <div aria-hidden>{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold my-5 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#6F4E37]">
            Aims & Objectives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aims.map((aim, index) => (
              <div
                key={index}
                className="flex gap-2 items-start bg-[#FFF8E7] p-6 rounded-lg"
              >
                <div className="w-5 h-5 pt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_11_1946)">
                      <path
                        d="M18.1673 8.33332C18.5479 10.2011 18.2767 12.1428 17.3989 13.8348C16.5211 15.5268 15.0897 16.8667 13.3436 17.6311C11.5975 18.3955 9.64203 18.5381 7.80342 18.0353C5.96482 17.5325 4.35417 16.4145 3.24007 14.8678C2.12597 13.3212 1.57577 11.4394 1.68123 9.53615C1.78668 7.63294 2.5414 5.8234 3.81955 4.4093C5.09769 2.9952 6.82199 2.06202 8.70489 1.76537C10.5878 1.46872 12.5155 1.82654 14.1665 2.77916"
                        stroke="#2D5016"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 9.16659L10 11.6666L18.3333 3.33325"
                        stroke="#2D5016"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_1946">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">{aim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Affiliations */}
      <section className="bg-linear-to-r from-red-900 to-red-700 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2.5">
            Accreditation & Affiliations
          </h2>
          <p className="text-center text-red-100 max-w-2xl mx-auto mb-12 text-lg">
            GBIS is recognized and affiliated with various local, national, and
            international organizations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {accreditations.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-3xl">📌</span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <span className="text-yellow-400 text-xl mt-1">✓</span>
                      <span className="text-red-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
