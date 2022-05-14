// @return Age by birthday
export const generateAge = (birthday) => {

    const today = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    }

    let age = today.year - birthday.getFullYear();

    if (today.month < birthday.getMonth()) return age - 1;
    if (today.month === birthday.getMonth() && today.day < birthday.getDate()) return age - 1;

    return age;
}