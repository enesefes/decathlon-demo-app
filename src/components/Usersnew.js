import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Usersnew() {
  const [usersdata, setusersdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user?limit=10", {
        headers: {
          "app-id": "6165cc265f689359f2e37824",
        },
      })
      .then((response) => {
        setusersdata(response.data.data);
        console.log(usersdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              User List
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">You</span>
            </span>{" "}
            can find everything about our users on this page
          </h2>
        </div>

        <div className="grid max-w-lg gap-5 mb-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:mx-auto sm:mx-auto lg:max-w-full">
          {usersdata.map((user, i) => (
            <>
              <Link key={i} to={`/profile/${user.id}`}>
                <div class="card text-center shadow-xl">
                  <figure class="px-10 pt-10">
                    <img
                      src={user.picture}
                      alt={user.firstName}
                      class="rounded-xl"
                    ></img>
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      {user.title}. {user.firstName} {user.lastName}
                    </h2>
                    <p className="truncate">{user.id}</p>
                    <div class="justify-center card-actions">
                      <button class="btn btn-outline btn-accent">
                        More info
                      </button>
                    </div>
                  </div>
                </div>
                
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Usersnew;
