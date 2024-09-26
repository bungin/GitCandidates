const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    // console.log('Response:', response);
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    const data = await response.json();
    const returnData = [];
    for (const user of data) {
      const userResponse = await fetch(
        `https://api.github.com/users/${user.login}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      if (userResponse.ok) {
        returnData.push(user);
      }
    }
    return returnData.filter((user: any) => user.login);
  } catch (err) {
    console.log("an error occurred", err);
    return [];
  } //check for 404 response
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    return data;
  } catch (err) {
    console.log("an error occurred", err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
