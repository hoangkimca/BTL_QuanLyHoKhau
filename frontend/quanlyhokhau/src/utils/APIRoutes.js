const host = "http://localhost:5000";

//auth
export const registerRoute = `${host}/api/auth/dangky`;
export const loginRoute = `${host}/api/auth/dangnhap`;

//main ho khau
export const addhokhauRoute = `${host}/api/addhokhau`;
export const updatehokhauRoute = `${host}/api/suahokhau`;
export const gethokhauRoute = `${host}/api/gethokhau`;
export const chitiethokhauRoute = `${host}/api/chitiethokhau`;

//main nhan khau
export const addnhankhauRoute = `${host}/api/addnhankhau`;
export const updatenhankhauRoute = `${host}/api/updatenhankhau`;
export const getnhankhauRoute = `${host}/api/getnhankhau`;

//main buoi hop
export const addbuoihopRoute = `${host}/api/addbuoihop`;
export const diemdanhbuoihopRoute = `${host}/api/diemdanhbuoihop`;