//import { toast } from "react-toastify";

//save user info into local storage======================================
// export function setUser(uInfo) {
//     localStorage.setItem('uInfo', JSON.stringify(uInfo));
// }

// export function getUser() {
//     const uInfo = JSON.parse(localStorage.getItem('uInfo'));
//     return uInfo;
// }

// export function clearAll() {
//     localStorage.clear();
//     window.location.reload()
// }



// API request functions=====================================================================
export const apiCall = async (endPoint, method, body) => {
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  };

  // console.log("request endpoint===============");
  // console.log(`${endPoint}`);
  // console.log(requestOptions);

  let jsonResponse = null;
  try {
    // const response = await fetch(`${process.env.REACT_APP_BASE_URL}${endPoint}`, requestOptions);
    const response = await fetch(`${endPoint}`, requestOptions);
    jsonResponse = await response.json();

    // console.log(`jsonResponse of--------${endPoint}---------`);
    // console.log(jsonResponse);
    if (jsonResponse) {
      return jsonResponse;
    } else {
      console.log("sucess")
      // toast.info(jsonResponse?.message, {
      //   theme: "colored",
      //   draggable: true,
      //   pauseOnHover: true,
      // });
    }
  } catch (e) {
    console.error(e);
    // toast.error("Something went wrong!! " + e, {
    //   theme: "colored",
    //   draggable: true,
    //   pauseOnHover: true,
    // });

    //  finally {
    //     console.log('We do cleanup here');
    //     if (!jsonResponse?.data) {
    //         toast.error("Something went wrong!! ")
    //     }

    // }
  }
};
