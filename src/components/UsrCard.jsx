const UsrCard = ({ user }) => {
  console.log("User", user);
  const { firstName, lastName, photoURL, age, about, gender } = user;
  return (
    <div className="card bg-base-300 w-75 shadow-2xl">
      <figure>
        <img src={photoURL} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age && gender && age + ", " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UsrCard;
