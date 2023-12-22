import anime from "animejs";
import { useEffect } from "react";

const Anims = (props) => {
  useEffect(() => {
    //love pattern
    document.getElementById("173").style.backgroundColor = "#ff5253";
    document.getElementById("157").style.backgroundColor = "#ff5253";
    document.getElementById("159").style.backgroundColor = "#ff5253";
    document.getElementById("141").style.backgroundColor = "#ff5253";
    document.getElementById("145").style.backgroundColor = "#ff5253";
    document.getElementById("125").style.backgroundColor = "#ff5253";
    document.getElementById("131").style.backgroundColor = "#ff5253";
    document.getElementById("109").style.backgroundColor = "#ff5253";
    document.getElementById("117").style.backgroundColor = "#ff5253";
    document.getElementById("103").style.backgroundColor = "#ff5253";
    document.getElementById("93").style.backgroundColor = "#ff5253";
    document.getElementById("88").style.backgroundColor = "#ff5253";
    document.getElementById("78").style.backgroundColor = "#ff5253";
    document.getElementById("72").style.backgroundColor = "#ff5253";
    document.getElementById("64").style.backgroundColor = "#ff5253";
    document.getElementById("56").style.backgroundColor = "#ff5253";
    document.getElementById("55").style.backgroundColor = "#ff5253";
    document.getElementById("51").style.backgroundColor = "#ff5253";
    document.getElementById("50").style.backgroundColor = "#ff5253";
    document.getElementById("67").style.backgroundColor = "#ff5253";
    document.getElementById("69").style.backgroundColor = "#ff5253";
    document.getElementById("83").style.backgroundColor = "#ff5253";

    //fill pattern
    document.getElementById("158").style.backgroundColor = "#ff5253";
    document.getElementById("142").style.backgroundColor = "#ff5253";
    document.getElementById("143").style.backgroundColor = "#ff5253";
    document.getElementById("144").style.backgroundColor = "#ff5253";
    document.getElementById("130").style.backgroundColor = "#ff5253";
    document.getElementById("129").style.backgroundColor = "#ff5253";
    document.getElementById("128").style.backgroundColor = "#ff5253";
    document.getElementById("127").style.backgroundColor = "#ff5253";
    document.getElementById("126").style.backgroundColor = "#ff5253";
    document.getElementById("110").style.backgroundColor = "#ff5253";
    document.getElementById("111").style.backgroundColor = "#ff5253";
    document.getElementById("112").style.backgroundColor = "#ff5253";
    document.getElementById("113").style.backgroundColor = "#ff5253";
    document.getElementById("114").style.backgroundColor = "#ff5253";
    document.getElementById("115").style.backgroundColor = "#ff5253";
    document.getElementById("116").style.backgroundColor = "#ff5253";
    document.getElementById("94").style.backgroundColor = "#ff5253";
    document.getElementById("95").style.backgroundColor = "#ff5253";
    document.getElementById("96").style.backgroundColor = "#ff5253";
    document.getElementById("97").style.backgroundColor = "#ff5253";
    document.getElementById("98").style.backgroundColor = "#ff5253";
    document.getElementById("99").style.backgroundColor = "#ff5253";
    document.getElementById("100").style.backgroundColor = "#ff5253";
    document.getElementById("101").style.backgroundColor = "#ff5253";
    document.getElementById("102").style.backgroundColor = "#ff5253";
    document.getElementById("79").style.backgroundColor = "#ff5253";
    document.getElementById("80").style.backgroundColor = "#ff5253";
    document.getElementById("81").style.backgroundColor = "#ff5253";
    document.getElementById("82").style.backgroundColor = "#ff5253";
    document.getElementById("84").style.backgroundColor = "#ff5253";
    document.getElementById("85").style.backgroundColor = "#ff5253";
    document.getElementById("86").style.backgroundColor = "#ff5253";
    document.getElementById("87").style.backgroundColor = "#ff5253";
    document.getElementById("65").style.backgroundColor = "#ff5253";
    document.getElementById("66").style.backgroundColor = "#ff5253";
    document.getElementById("70").style.backgroundColor = "#ff5253";
    document.getElementById("71").style.backgroundColor = "#ff5253";
  });

  const anims = (e) => {
    anime({
      targets: document.querySelector("#love").children,
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(150, { grid: [15, 15], from: e.target.id - 1 }),
    });
  };

  const rows = [];
  for (let i = 1; i <= props.dot; i++) {
    rows.push(<div id={i} onClick={anims} className="m-1 p-2 max-md:p-[7px] bg-white rounded-full shadow-[5px_5px_0px_0px_rgb(51,65,85)] hover:bg-[#ff5253] transition"></div>);
  }

  return (
    <div id={props.id} className={props.className}>
      {rows}
    </div>
  );
};

export default Anims;
