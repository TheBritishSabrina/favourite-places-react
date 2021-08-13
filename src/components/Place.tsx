import React from "react";

interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  imageURL: string;
  mapLink: string;
  bio: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <section className="place-section">
      <img className="image" src={props.imageURL} />
      <h2>{props.title}</h2>
      <h3>
        {props.placeName}, {props.countryName} (
        <a href={props.mapLink}>map link</a>)
      </h3>
      <p>{props.bio}</p>
    </section>
  );
}

export default Place;
