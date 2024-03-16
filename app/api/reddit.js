export const API_ROOT = "https://oauth.reddit.com/r";

// export const fetchSubRedditPosts = async (subreddit) => {
//     const response = await fetch(`${API_ROOT}${subreddit}.json`, {
//         mode: "cors",
//     });
//     const json = await response.json();

//     return json.data;
// };

const clientId = '';
const clientSecret = '';


//Fetching access token
const fetchAccessToken = async () => {
    try {
        const tokenResponse = await fetch(
            "https://www.reddit.com/api/v1/access_token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${btoa(
                        `${clientId}:${clientSecret}`
                    )}`,
                },
                body: "grant_type=client_credentials",
            }
        );
        if (!tokenResponse.ok) {
            throw new Error(
                `Failed to obtain access token. Status: ${tokenResponse.status}`
            );
        }

        const tokenData = await tokenResponse.json();
        return tokenData.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw error;
    }
};

export const getRedditPosts = async (subReddit) => {
    try {
        // const accessToken = await fetchAccessToken();

        const response = await fetch(`${API_ROOT}/${subReddit}.json`, {
            method: "GET",
            mode: "cors",
            // headers: {
            //     "Content-Type": "application/json",
            //     "User-Agent": userAgent,
            //     Authorization: `Bearer ${accessToken}`,
            // },
        });

        if (response.ok) {
            const json = await response.json();
            console.log(json.data.children.map((post) => post.data));
            return json.data.children.map((post) => post.data);
        } else {
            throw new Error(
                `Request to /r/${subReddit}.json failed. Status: ${response.status}`
            );
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
