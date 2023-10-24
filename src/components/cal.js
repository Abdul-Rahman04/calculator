import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const Cal = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <div class="display">
        <div class="blue">
          <div class="mobile">
            <input type="text" value={result}></input>
            <div class="button">
              <button
                onClick={clear}
                id="clear"
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124))",
                  color: "white",
                }}
              >
                CLEAR
              </button>
              <button
                onClick={backspace}
                id="backspace"
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124))",
                  color: "white",
                }}
              >
                C
              </button>
              <button
                name="/"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124)) ",
                  color: "white",
                }}
              >
                %
              </button>

              <button
                name="7"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124))",
                  color: "white",
                }}
              >
                7
              </button>
              <br />

              <button
                name="8"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42)) ",
                  color: "white",
                }}
              >
                8
              </button>
              <button
                name="9"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42)) ",
                  color: "white",
                }}
              >
                9
              </button>
              <button
                name="*"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42)) ",
                  color: "white",
                }}
              >
                *
              </button>
              <button
                name="4"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124))",
                  color: "white",
                }}
              >
                4
              </button>
              <br />

              <button
                name="5"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                5
              </button>
              <button
                name="6"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                6
              </button>
              <button
                name="-"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                -
              </button>
              <button
                name="1"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(108, 150, 212),rgb(10, 50, 124))",
                  color: "white",
                }}
              >
                1
              </button>
              <br />

              <button
                name="2"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                2
              </button>
              <button
                name="3"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                3
              </button>
              <button
                name="+"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                +
              </button>
              <button
                name="0"
                onClick={handleClick}
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "black",
                }}
              >
                0
              </button>
              <br />
              <button
                name="."
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                .
              </button>

              <button
                onClick={calculate}
                name="="
                class="btn3d btn btn-default btn-lg"
                style={{
                  backgroundimage:
                    "linear-gradient(rgb(17, 17, 17),rgb(44, 42, 42))",
                  color: "white",
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cal;
