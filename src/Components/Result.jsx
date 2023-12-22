import jawaban from "../Data/UserAnswers";

const Result = (props) => {
  const jawab = [];

  for (let z = 0; z < jawaban.length; z++) {
    jawab.push(
      <p>
        {z + 1}. {jawaban[z]}
      </p>
    );
  }

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img src={props.profile.picture} alt="" className="w-12 rounded-full" />
          <h1 className="font-primary text-white">{props.profile.name}</h1>
        </div>
        <div className="w-full p-0.5 bg-[#ff5253]"></div>
        <div className="mt-3 flex flex-col justify-center items-center">
          <div className="p-5 bg-white rounded-lg">
            <h2 className="mt-2 text-black font-primary text-center">Jawaban kamu:</h2>
            {jawab}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
