import React from "react";

const UserCard = ({ data }) => {
  console.log(data);
  const { firstName, lastName, photoUrl, age, gender, skills, about } =
    data || {};
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img className="w-3/4" src={photoUrl} alt="Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age && `Age: ${age}`}</p>
          <p>{gender && `Gender: ${gender}`}</p>
          <p>{skills.length > 0 && skills.map((item) => <li>{item}</li>)}</p>
          <p>{about && `About: ${about}`}</p>
          <div className="card-actions justify-center py-2">
            <button className="btn btn-primary mr-4">Igonre</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
