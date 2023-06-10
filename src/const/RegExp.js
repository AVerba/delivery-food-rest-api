const emailRegexp =
    /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@([a-zA-Z0-9]+([a-zA-Z0-9.])\.)+[a-z]{2,4}$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;

module.exports = {
    emailRegexp,
    passwordRegexp,
}
