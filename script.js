const nameid = document.getElementById("p-name");
const emailid = document.getElementById("p-email");
const addressid = document.getElementById("p-address");
const btngen = document.getElementById("btn-random");
const loding = document.getElementById("div-loading-card");
const icon = document.getElementById("span-gender-icon");
const imgcard = document.getElementById("img-profile");
const divcard = document.getElementById("div-user-card");

divcard.style.display = "none";

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgcard.src = resp.data.results.picture.large;
  nameid.innerText = resp.data.results.name;
  emailid.innerText = resp.data.results.email;
  addressid.innerText = resp.data.results.city;
}

callApi();

imgcard.onload = () => {
  divcard.style.display = "";
};
btngen.onclick = async () => {
  callApi();
};
