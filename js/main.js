let isUserLoggedIn = () => {
    fetch('http://16.171.161.175/isLoggedIn', {
        method: 'POST',
        headeRs: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(res => res.json())
        .then(data => {
            if (data.Status && data.Status === 'Success') {
                document.getElementById("login").style.display = "none";
                document.getElementById("register").style.display = "none";
            } else {
                document.getElementById("profile").style.display = "none";
                document.getElementById("logout").style.display = "none";
            }
        })
        .catch(error => console.log(error));
}

let logout = () => {
    fetch('http://16.171.161.175/logout', {
        method: 'POST',
        headeRs: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(res => res.json())
        .then(data => {
            if (data.Status && data.Status === 'Success') {
                window.location.assign("login.html");
            }
        })
        .catch(error => console.log(error));
}