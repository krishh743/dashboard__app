export const removeInvaildCharFromTextField = (value) => {
    return value ? value.replace(/[^A-Za-z\s]/gi, "") : "";
}

export const removeInvaildCharFromMobileField = (value) => {
    return value ? value.replace(/[^0-9]/gi, "") : "";
}

export const removeInvaildCharFromPANField = (value) => {
    return value ? value.replace(/[^A-Z0-9]/gi, "") : "";
}

export const onlyNumbersAccept = (value) => {
    return value ? value.replace(/\D/g, '') : ""
}

export const validatingValueHandler = (value) => {
    if (value === 'null' || !value || value === 'undefined') return ''
    return value
}
export const getProductType = (journeyType, vehicleType) => {
    return (vehicleType==="C" ? "PV " : "TW ") + journeyType 
}

export const getVehicleType = (storedVehicleType) => {
    let vehicleType = storedVehicleType === "Two Wheeler Loan" ? "H" : "C"
    return vehicleType;
}

export const getName = (name, type) => {
    let finalName = name;
    const [firstName, ...lastName] = name.split(' ');
    if (type === 'firstname') {
        finalName = firstName;
    } else {
        finalName = lastName?.join(' ') || finalName;
    }
    return finalName;
}

export const sortByDescending = (data) => {
    data.sort((a, b) => {
        let da = new Date(a.updatedTime),
            db = new Date(b.updatedTime);
        return da - db;
    });
    data.reverse();
    return data;
}

export const removeInvaildCharFromAddress = (value) => {
    return value ? value.replace(/[^A-Za-z0-9.,_/-\s]/gi, "") : "";
}

export const isDevAndDevelopment = window.location.origin?.includes("localhost") || window.location.origin?.includes("dev")