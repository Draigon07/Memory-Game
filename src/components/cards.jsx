import { useEffect, useState } from "react";

function Card({ item, handleClick, id }) {
  const itemClass = item.stat ? `${item.stat}` : "";
  return (
    <div className={`card ${itemClass}`} onClick={() => handleClick(id)}>
      <picture>{item.comp}</picture>
    </div>
  );
}

function Cards() {
  const STYLES = {
    fontSize: "3rem",
  };
  const [items, setItems] = useState(
    [
      {
        id: 1,
        comp: <i style={STYLES} class="bx bxl-postgresql"></i>,
        stat: "",
      },
      {
        id: 1,
        comp: <i style={STYLES} class="bx bxl-postgresql"></i>,
        stat: "",
      },
      {
        id: 2,
        comp: <i style={STYLES} class="bx bxl-discord-alt"></i>,
        stat: "",
      },
      {
        id: 2,
        comp: <i style={STYLES} class="bx bxl-discord-alt"></i>,
        stat: "",
      },
      {
        id: 3,
        comp: <i style={STYLES} class="bx bxl-instagram-alt"></i>,
        stat: "",
      },
      {
        id: 3,
        comp: <i style={STYLES} class="bx bxl-instagram-alt"></i>,
        stat: "",
      },
      {
        id: 4,
        comp: <i style={STYLES} class="bx bxl-windows"></i>,
        stat: "",
      },
      {
        id: 4,
        comp: <i style={STYLES} class="bx bxl-windows"></i>,
        stat: "",
      },
      {
        id: 5,
        comp: <i style={STYLES} class="bx bxl-react"></i>,
        stat: "",
      },
      {
        id: 5,
        comp: <i style={STYLES} class="bx bxl-react"></i>,
        stat: "",
      },
      {
        id: 6,
        comp: <i style={STYLES} class="bx bxl-snapchat"></i>,
        stat: "",
      },
      {
        id: 6,
        comp: <i style={STYLES} class="bx bxl-snapchat"></i>,
        stat: "",
      },
      {
        id: 7,
        comp: <i style={STYLES} class="bx bxl-baidu"></i>,
        stat: "",
      },
      {
        id: 7,
        comp: <i style={STYLES} class="bx bxl-baidu"></i>,
        stat: "",
      },
      {
        id: 8,
        comp: (
          <i
            class="bx bxl-html5"
            style={{ color: "orange", fontSize: "3rem" }}
          ></i>
        ),
        stat: "",
      },
      {
        id: 8,
        comp: (
          <i
            class="bx bxl-html5"
            style={{ color: "orange", fontSize: "3rem" }}
          ></i>
        ),
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function toBeChecked(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  useEffect(() => {
    console.log("Changed");
  }, [items]);

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      toBeChecked(id);
    }
  }

  const Mapper = items.map((el, index) => {
    return <Card key={index} item={el} id={index} handleClick={handleClick} />;
  });

  return <div className="container">{Mapper}</div>;
}

export default Cards;
