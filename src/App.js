import { useState, useEffect } from "react";
import "./App.css";
import {PartList} from "./components/PartList";
import Avatar from "./components/Avatar";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  facial_hair: 17,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [facial_hair, setFacialHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);

  const setToDefault = () => {
    setBody();
    setEyes();
    setEyebrow();
    setHair();
    setFacialHair();
    setMouth();
    setMouth();
    setGlasses();
    setClothing1();
    setClothing2();
    setClothing3();
  }

  const randomAvatar = () => {
    setBody(Math.floor(Math.random() * total.body));
		setEyes(Math.floor(Math.random() * total.eyes));
		setEyebrow(Math.floor(Math.random() * total.eyebrows));
		setHair(Math.floor(Math.random() * total.hair));
    setFacialHair(Math.floor(Math.random() * total.facial_hair));
		setMouth(Math.floor(Math.random() * total.mouth));
		setMouth(Math.floor(Math.random() * total.mouth));
		setGlasses(Math.floor(Math.random() * total.glasses));
		setClothing1(Math.floor(Math.random() * total.clothing1));
		setClothing2(Math.floor(Math.random() * total.clothing2));
		setClothing3(Math.floor(Math.random() * total.clothing3));
  }

  useEffect(() => {
		setToDefault();
    randomAvatar();
	}, []);

  
  return (
    <>
    <div className="App">
      <div className="title">CHARACTER CUSTOMIZATION</div>
      <div className="divider3"></div>
      <div className="avatar-group gap-30">
      <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              facial_hair={facial_hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrow={eyebrows}
              glasses={glasses}
            />
            <div className="text-center">

						</div>
          </div>
        </div>
        <div>
          <div className="contain">
          <div className="list-section">
            <h2>Body</h2>
            <div className="divider"></div>
            <PartList
              total={total.body}
              path="body"
              set={setBody}
              selected={body}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <div className="divider"></div>
            <PartList
              total={total.hair}
              path="hair"
              set={setHair}
              selected={hair}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <div className="divider"></div>
            <PartList
              total={total.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
              zoom={2.5}
              top="35px"
            />
          </div>
          <div className="list-section">
            <h2>Facial Hair</h2>
            <div className="divider"></div>
            <PartList
              total={total.facial_hair}
              path="facial_hair"
              set={setFacialHair}
              selected={facial_hair}
            />
          </div>
          <div className="list-section">
            <h2>Mouths</h2>
            <div className="divider"></div>
            <PartList
              total={total.mouth}
              path="mouths"
              set={setMouth}
              selected={mouth}
              zoom={2}
            />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <div className="divider"></div>
            <PartList
              total={total.eyebrows}
              path="eyebrows"
              set={setEyebrow}
              selected={eyebrows}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <div className="divider"></div>
            <PartList
              total={total.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses}
            />
          </div>
          <div className="list-section">
            <h2>Layer 1</h2>
            <div className="divider"></div>
            <PartList
              total={total.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            />
          </div>
          <div className="list-section">
            <h2>Layer 2</h2>
            <div className="divider"></div>
            <PartList
              total={total.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            />
          </div>
          <div className="list-section">
            <h2>Layer 3</h2>
            <div className="divider"></div>
            <PartList
              total={total.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
              zoom={2}
              top="-15px"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
