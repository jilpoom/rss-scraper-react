import axios from "axios";

export async function getAccessToken(data: {
    email: string;
    password: string;
}) {
    const response = await axios.post('', data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    })

    return response.data?.access_token
}