import jawaban from "../Data/UserAnswers";

const Form = (props) => {
  return (
    <>
      <div className="pb-6 bg-slate-700">
        <div className="p-2 bg-[#ff5253]">
          <h1 className="text-white font-primary">
            Soal {props.no}/{props.Soal}
          </h1>
        </div>
        <div className="p-2 flex flex-col space-y-2 ">
          <p className="text-white">Aku merasa lebih dicintai ketika..</p>
          <div className="flex flex-col space-y-6">
            <div className="flex">
              <div
                className="w-full p-4 hover:bg-slate-300 bg-white select-none cursor-pointer"
                onClick={() => {
                  jawaban.push(props.pilihan1);
                  console.log(props.jawaban);
                  props.setSoal((prev) => prev + 1);
                }}
              >
                {props.pilihan1}
              </div>
            </div>
            <div className="flex">
              <div
                className="w-full p-4 hover:bg-slate-300 bg-white select-none cursor-pointer"
                onClick={() => {
                  jawaban.push(props.pilihan2);
                  props.setSoal((prev) => prev + 1);
                }}
              >
                {props.pilihan2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
