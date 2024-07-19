export const API_URL = "http://localhost:5001";

export function SIGNIN_USER() {
  return {
    url: API_URL + "/signin",
  };
}

export function SIGNUP_USER() {
  return {
    url: API_URL + "/signup",
  };
}

export function USER_GET() {
  return {
    url: API_URL + "/me",
  };
}

// export function DELETE_MESSAGE(messageId: string) {
//   return {
//     url: API_URL + `/messages/${messageId}`,
//   };
// }
