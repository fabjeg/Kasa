import "../styles/Tags.scss";

export function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="tag"
        >
          {tag.split(" ").map((equipment, subIndex) => (
            <span
              key={subIndex}
              className="tag-equipment"
            >
              {equipment}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
