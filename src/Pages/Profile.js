import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Profile() {
  const { id } = useParams();

  const [userdetails, setuserdetails] = useState({});

  const [geo, setgeo] = useState({});

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZW5lc2VmZXMiLCJhIjoiY2t1eDR3bGNkMHF1ZTJ4cmZ5bmRvM3hlbyJ9.aPkvmH77JqlCyCCGu6x1RA",
  });

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "6165cc265f689359f2e37824",
        },
      })
      .then((response) => {
        setuserdetails(response.data);
        console.log(userdetails);
      })
      .then((res) => {
        const REQUEST_PARAMS = `${userdetails.location.street} ${userdetails.location.city} ${userdetails.location.state} ${userdetails.location.country}`;
        console.log(REQUEST_PARAMS);

        fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${REQUEST_PARAMS}&apiKey=4bcc74276552455d9601c393b60749f4`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setgeo(result.features[0].properties);
            console.log(geo);
          })
          .catch((error) => console.log("error", error));

        var requestOptions = {
          method: "GET",
        };
      })

      .catch((error) => {
        console.log(error);
      });
  }, [userdetails.id]);

  return (
    <>
      <div
        key={userdetails.id}
        class="flex items-left w-full px-4 py-10 bg-cover card bg-base-200"
      >
        <div class="card md:card-side">
          <figure class="p-6">
            <img
              alt="profile-picture"
              src={userdetails.picture}
              class="rounded-lg shadow-lg"
            ></img>
          </figure>
          <div class="max-w-md card-body">
            <h2 class="card-title">
              {userdetails.title}. {userdetails.firstName}{" "}
              {userdetails.lastName}
            </h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lon}`}
              target="_blank"
            >
              <span className=" font-bold">Address: </span>
              <p class="underline">
                {geo.address_line1}, {geo.address_line2}, {geo.city}/{geo.country}
              </p>
            </a>
          </div>
        </div>
        <div class="w-full shadow stats">
          <div class="grid-flow-row shadow stats">
            <div class="stat">
              <div class="stat-title">Phone</div>
              <div class="stat-value">{userdetails.phone}</div>
            </div>
            <div class="stat">
              <div class="stat-title">Date Of Birth</div>
              <div class="stat-value">
                {moment(userdetails.dateOfBirth).format("LL")}
              </div>
            </div>
            <div class="stat">
              <div class="stat-title">Gender</div>
              <div class="stat-value">{userdetails.gender}</div>
            </div>
            <div class="stat">
              <div class="stat-title">Register Date</div>
              <div class="stat-value">
                Joined {moment(userdetails.registerDate).format("MMMM Do YYYY")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
