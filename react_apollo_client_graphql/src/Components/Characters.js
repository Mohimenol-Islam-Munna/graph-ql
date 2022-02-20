import { Routes, Route, Link, useParams } from "react-router-dom";
import useCharacters from "../apolloClient/useCharacters";
import Character from "./Character";

const Characters = () => {
  const { loading, error, data, refetch } = useCharacters();
  const params = useParams();

  console.log("filter data ::", data);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ width: "60%", margin: "10px auto" }}>
            <div>
              <button onClick={() => refetch()}>Refetch</button>
            </div>
            {data &&
              data.characters.results.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid salmon",
                    margin: "5px",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  <h4>{item.name}</h4>
                  <p>{item.gender}</p>
                  <div>
                    <img src={item.image} />
                  </div>
                  <div style={{ margin: "20px auto" }}>
                    <Link to={`${item.id}`}>Details</Link>
                  </div>
                </div>
              ))}
          </div>
        }
      ></Route>
      <Route path={`:${params.id}`} element={<Character />}></Route>
    </Routes>
  );
};

export default Characters;
