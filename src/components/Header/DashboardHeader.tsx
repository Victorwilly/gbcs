import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between border-b-[0.5px] border-[#C3C2C2] w-full items-center py-6 px-3.5 md:px-8 bg-white">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium">Welcome back, John Doe!</h1>
        <p className="text-[#6B7280] pt-1 text-[12px]">
          Manage your academic journey
        </p>
      </div>

      <div className="flex items-center">
        <Link to="/" className="text-[12px] flex items-center gap-1 hover:underline">
          <span aria-hidden>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 10.0002C2.99993 9.70928 3.06333 9.42183 3.18579 9.15793C3.30824 8.89402 3.4868 8.66001 3.709 8.47221L10.709 2.47321C11.07 2.16812 11.5274 2.00073 12 2.00073C12.4726 2.00073 12.93 2.16812 13.291 2.47321L20.291 8.47221C20.5132 8.66001 20.6918 8.89402 20.8142 9.15793C20.9367 9.42183 21.0001 9.70928 21 10.0002V19.0002C21 19.5306 20.7893 20.0394 20.4142 20.4144C20.0391 20.7895 19.5304 21.0002 19 21.0002H5C4.46957 21.0002 3.96086 20.7895 3.58579 20.4144C3.21071 20.0394 3 19.5306 3 19.0002V10.0002Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Back to Website
        </Link>


        <div className="ml-4 flex items-center justify-center w-8 h-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2676 21C10.4431 21.304 10.6956 21.5565 10.9996 21.732C11.3037 21.9075 11.6485 21.9999 11.9996 21.9999C12.3506 21.9999 12.6955 21.9075 12.9995 21.732C13.3036 21.5565 13.556 21.304 13.7316 21"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.26225 15.326C3.13161 15.4692 3.0454 15.6472 3.0141 15.8385C2.9828 16.0298 3.00777 16.226 3.08595 16.4034C3.16414 16.5807 3.29218 16.7316 3.4545 16.8375C3.61682 16.9434 3.80642 16.9999 4.00025 17H20.0002C20.194 17.0001 20.3837 16.9438 20.5461 16.8381C20.7085 16.7324 20.8367 16.5817 20.9151 16.4045C20.9935 16.2273 21.0187 16.0311 20.9877 15.8398C20.9566 15.6485 20.8707 15.4703 20.7402 15.327C19.4102 13.956 18.0002 12.499 18.0002 8C18.0002 6.4087 17.3681 4.88258 16.2429 3.75736C15.1177 2.63214 13.5915 2 12.0002 2C10.4089 2 8.88282 2.63214 7.75761 3.75736C6.63239 4.88258 6.00025 6.4087 6.00025 8C6.00025 12.499 4.58925 13.956 3.26225 15.326Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
