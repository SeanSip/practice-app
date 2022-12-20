import React, { useState } from "react";
import "../App.css";

const DUMMY_MEMBERS = [
  {
    img: "https://loremflickr.com/200/200",
    id: "a1",
    name: "John",
    age: 10,
    rating: 4.5,
    activities: ["hiking", "swimming", "biking"],
  },

  {
    img: "https://placekeanu.com/200/200",
    id: "a2",
    name: "Paul",
    age: 12,
    rating: 5,
    activities: ["swimming", "crafts", "plant identification"],
  },

  {
    img: "https://placebeard.it/200/200",
    id: "a3",
    name: "George",
    age: 11,
    rating: 3.2,
    activities: ["volleyball", "tennis", "rowing"],
  },

  {
    img: "https://placekitten.com/200/200",
    id: "a4",
    name: "Ringo",
    age: 13,
    rating: 5,
    activities: ["fishing", "tennis", "tree climbing"],
  },

  {
    img: "https://placekitten.com/201/201",
    id: "a5",
    name: "Alex",
    age: 6,
    rating: 2.8,
    activities: ["fishing", "crafts", "plant identification"],
  },

  {
    img: "https://placekitten.com/202/202",
    id: "a6",
    name: "Andrew",
    age: 8,
    rating: 4.4,
    activities: ["volleyball", "tennis", "swimming"],
  },
];

const MemberCards = ({ members }) => {
  return (
      <div className="memberCardContainer">
        {members.map((member) => (
          <div key={member.id} className="memberCard">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>Age: {member.age}</p>
            <p>Rating: {member.rating}</p>
            <p>Activities: {member.activities.join(", ")}</p>
          </div>
        ))}
      </div>
  );
};

const ActivityFilter = () => {
  const [filteredMembers, setFilteredMembers] = useState(DUMMY_MEMBERS);

  const handleChange = (event) => {
    const selectedActivity = event.target.value;
    setFilteredMembers(
      selectedActivity === ""
        ? DUMMY_MEMBERS
        : DUMMY_MEMBERS.filter((member) =>
            member.activities.includes(selectedActivity)
          )
    );
  };

  return (
    <div>
      <div className="activitySelector">
        <label htmlFor="activity-select">Select an activity:</label>
        <select
          id="activity-select"
          onChange={handleChange}
          className="customSelect"
        >
          <option value="">All</option>
          {Array.from(
            new Set(DUMMY_MEMBERS.flatMap((member) => member.activities))
          )
            .sort()
            .map((act) => (
              <option key={act} value={act}>
                {act}
              </option>
            ))}
        </select>
      </div>
      <MemberCards members={filteredMembers} />
    </div>
  );
};

export default ActivityFilter;
