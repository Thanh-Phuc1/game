import React from "react";
import { Part } from "./Part";

const Avatar = (
  {
    body,
    eyes,
    hair,
    facial_hair,
    clothing1,
    clothing2,
    clothing3,
    mouth,
    eyebrow,
    glasses,
  },
  ref
) => {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eyes} zIndex={100} />
      <Part path="hair" index={hair} zIndex={600} />
      <Part path="facial_hair" index={facial_hair} zIndex={600}/>
      <Part path="clothes/layer_1" index={clothing1} zIndex={200} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={300} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={400} />
      <Part path="mouths" index={mouth} zIndex={400} />
      <Part path="noses" index={0} zIndex={400} />
      <Part path="eyebrows" index={eyebrow} zIndex={400} />
      <Part path="accessories/glasses" index={glasses} zIndex={500} />
    </div>
  );
};

export default Avatar;
