import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import like from "../images/like.svg";
import moment from "moment";

function Postlistnew() {
  const [postdata, setpostdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "app-id": "6165cc265f689359f2e37824",
        },
      })
      .then((response) => {
        setpostdata(response.data.data);
        console.log(response);
        console.log(postdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
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
              <span className="relative">Post</span>
            </span>{" "}
            List
          </h2>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          {postdata.map((post, i) => (
            <>
              <div className="text-left mb-5">
                <Link to={`/profile/${post.owner.id}`}>
                  <div className=" flex mb-2 p-2 h-auto bg-white shadow-sm rounded-2xl">
                    <div class="avatar">
                      <div class="w-14 h-14 mask mask-squircle">
                        <img
                          src={post.owner.picture}
                          alt={post.owner.firstName}
                        ></img>
                      </div>
                      <div className="grid content-center">
                        <h3 className="px-4 text-base font-bold text-left">
                          {post.owner.title}. {post.owner.firstName}{" "}
                          {post.owner.lastName}
                        </h3>
                        <p className="px-4 text-sm text-gray-500">
                          {post.owner.id}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div class="card text-left shadow-sm bg-white">
                  <figure class=" rounded-tr-none	">
                    <img
                      src={post.image}
                      className=" rounded-t-none h-96 object-cover "
                    ></img>
                  </figure>
                  <div class="card-body px-4">
                    <p>{post.text}</p>
                  </div>
                  <div className="flex p-4">
                    {post.tags.map((tag) => (
                      <div class="badge badge-primary mr-3 flex">{tag}</div>
                    ))}
                  </div>
                  <div className="flex my-4 mx-4 items-center justify-between">
                    <div className="flex justify-between">
                      <span>
                        <img
                          className=" text-red-400"
                          src={like}
                          alt="likes-button"
                        ></img>
                      </span>
                      <p className=" text-gray-800 text-xl ml-2 normal-case">
                        {post.likes}
                      </p>
                    </div>
                    <div>{moment(post.publishDate).format("LL HH:mm:ss")}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Postlistnew;
