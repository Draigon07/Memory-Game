import { useState } from "react";
import "boxicons";

function Card({ item, handleClick }) {
  const itemClass = item.stat ? `active${item.stat}` : "";
  return (
    <div className={`card${itemClass}`} onClick={() => handleClick(item.id)}>
      <picture>{item.comp}</picture>
    </div>
  );
}

function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        comp: <box-icon type="logo" name="postgresql"></box-icon>,
        stat: "",
      },
      {
        id: 1,
        comp: <box-icon type="logo" name="postgresql"></box-icon>,
        stat: "",
      },
      {
        id: 2,
        comp: (
          <box-icon type="logo" color="purple" name="discord-alt"></box-icon>
        ),
        stat: "",
      },
      {
        id: 2,
        comp: (
          <box-icon type="logo" color="purple" name="discord-alt"></box-icon>
        ),
        stat: "",
      },
      {
        id: 3,
        comp: <box-icon type="logo" name="instagram"></box-icon>,
        stat: "",
      },
      {
        id: 3,
        comp: <box-icon type="logo" name="instagram"></box-icon>,
        stat: "",
      },
      {
        id: 4,
        comp: <box-icon type="logo" name="windows"></box-icon>,
        stat: "",
      },
      {
        id: 4,
        comp: <box-icon type="logo" name="windows"></box-icon>,
        stat: "",
      },
      {
        id: 5,
        comp: <box-icon type="logo" name="react"></box-icon>,
        stat: "active",
      },
      {
        id: 5,
        comp: <box-icon type="logo" name="react"></box-icon>,
        stat: "",
      },
      {
        id: 6,
        comp: <box-icon type="logo" name="snapchat"></box-icon>,
        stat: "",
      },
      {
        id: 6,
        comp: <box-icon type="logo" name="snapchat"></box-icon>,
        stat: "",
      },
      {
        id: 7,
        comp: <box-icon type="logo" name="baidu"></box-icon>,
        stat: "",
      },
      {
        id: 7,
        comp: <box-icon type="logo" name="baidu"></box-icon>,
        stat: "",
      },
      {
        id: 8,
        comp: <box-icon type="logo" color="orange" name="html5"></box-icon>,
        stat: "",
      },
      {
        id: 8,
        comp: <box-icon type="logo" color="orange" name="html5"></box-icon>,
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function handleClick(id) {
    alert(id);
  }
  return (
    <div className="container">
      {items.map((el, index) => (
        <Card key={index} item={el} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
