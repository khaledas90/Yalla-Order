// let apiUrl = "https://insta-order-site.web-allsafeeg.com/api";
// let token = "310|Jtp8tTfHXTrFXh413EAC2XWzPddRK2dWYvYpIFKPaaae8122";

async function getRestaurants(token, apiUrl, language) {
    let response = await fetch(`${apiUrl}/places/restaurantes/list`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept-Language": language,
        },
    });
    let data = await response.json();
    console.log(data);
    return data;
}

export { getRestaurants };