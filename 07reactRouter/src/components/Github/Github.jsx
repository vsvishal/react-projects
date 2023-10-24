import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/vsvishal")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    data && (
      <div className="bg-gray-600 text-white text-3xl p-4 text-center">
        Github followers:{data.followers}
        <img className="w-44" src={data.avatar_url} alt="avatar" />
      </div>
    )
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/vsvishal");
  return response.json();
};
