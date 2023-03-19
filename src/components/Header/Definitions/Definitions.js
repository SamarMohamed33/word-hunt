import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, LightMode }) => {
  return (
    <div className="meanings">
      <div className="audios-div">
        {meanings[0] &&
          word &&
          meanings.map(
            (meaning) =>
              meaning.phonetics &&
              meaning.phonetics.map(
                (item) =>
                  item.audio !== "" && (
                    <div className="audio-word">
                      <audio
                        controls
                        src={item.audio}
                        style={{
                          border: LightMode ? "7px solid #282c34" : "",
                          borderRadius: "50px",
                        }}
                      >
                        Your Browser doesn't support audio
                      </audio>
                    </div>
                  )
              )
          )}
      </div>
      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((meaning) =>
          meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="single-meaning"
                style={{
                  backgroundColor: LightMode ? "#282c34" : "white",
                  color: LightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms > 0 && (
                  <span>
                    <b>synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};
export default Definitions;
