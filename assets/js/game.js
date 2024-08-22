if ($('body').is('.game')) {
    const answers = ["a", "b", "c", "d"]
    const questions = {
        "Identity Basics": {
            100: {
                heading: "What is the term for verifying the identity of a user or system?",
                a: "Authorization",
                b: "Authentication",
                c: "Auditing",
                d: "Accounting",
                correct: "b"
            },
            200: {
                heading: "What does SSO stand for in identity management?",
                a: "Secure System Operation",
                b: "Single Sign-On",
                c: "Server Side Optimization",
                d: "Secure Sign-Out",
                correct: "b"
            },
            300: {
                heading: "What is a common protocol used for single sign-on?",
                a: "SMTP",
                b: "SAML",
                c: "FTP",
                d: "HTTP",
                correct: "b"
            },
            400: {
                heading: "What does MFA stand for?",
                a: "Multi-Factor Authentication",
                b: "Maximum-Failure Authentication",
                c: "Multi-File Access",
                d: "Minimum-Factor Authentication",
                correct: "a"
            },
            500: {
                heading: "Which of these is NOT a factor used in multi-factor authentication?",
                a: "Something you know",
                b: "Something you have",
                c: "Something you are",
                d: "Something you want",
                correct: "d"
            },
            1000: {
                heading: "What is the purpose of OAuth?",
                a: "To authenticate users",
                b: "To provide access delegation",
                c: "To encrypt data",
                d: "To manage user roles",
                correct: "b"
            },
            2000: {
                heading: "Which of the following is a popular identity provider?",
                a: "AWS Lambda",
                b: "Okta",
                c: "Docker",
                d: "Kubernetes",
                correct: "b"
            },
            4000: {
                heading: "What does the acronym IAM stand for in the context of identity management?",
                a: "Identity and Access Management ",
                b: "Information and Access Management",
                c: "Identity and Authentication Management",
                d: "Internet Access Management",
                correct: "a"
            },
            8000: {
                heading: "Which standard is commonly used for passwordless authentication?",
                a: "SAML",
                b: "FIDO2",
                c: "LDAP",
                d: "Kerberos",
                correct: "b"
            },
            16000: {
                heading: "What is a 'claim' in the context of identity management?",
                a: "A request for data",
                b: "An assertion about an entity",
                c: "A denial of access",
                d: "A type of encryption",
                correct: "b"
            },
            32000: {
                heading: "Which protocol is often used for directory services and single sign-on within a Windows environment?",
                a: "OAuth",
                b: "SAML",
                c: "LDAP",
                d: "OpenID Connect",
                correct: "c"
            },
            64000: {
                heading: "What is the primary benefit of using federated identity management?",
                a: "Reduces the number of passwords users need to remember",
                b: "Increases the complexity of identity management",
                c: "Centralizes all user data in one system",
                d: "Eliminates the need for user authentication",
                correct: "a"
            },
            125000: {
                heading: "What does 'SCIM' stand for in identity management?",
                a: "Secure Credential Identity Management",
                b: "System for Cross-domain Identity Management",
                c: "Standardized Credential Interface Module",
                d: "Simple Cloud Identity Management",
                correct: "b"
            },
            250000: {
                heading: "Which component is essential for implementing Zero Trust architecture?",
                a: "Firewall",
                b: "VPN",
                c: "Continuous verification",
                d: "DNS",
                correct: "c"
            },
            500000: {
                heading: "Which of the following is NOT a principle of Zero Trust security?",
                a: "Always verify",
                b: "Assume breach",
                c: "Trust but verify",
                d: "Least privilege access",
                correct: "c"
            },
            1000000: {
                heading: "Which technology can be used to enhance security by verifying user identity based on their behavior?",
                a: "Biometrics",
                b: "Behavioral analytics",
                c: "CAPTCHA",
                d: "Token-based authentication",
                correct: "b"
            }
        },

        "Passwordless": {
            100: {
                heading: "What does 'passwordless authentication' primarily aim to eliminate?",
                a: "Usernames",
                b: "Passwords",
                c: "Email addresses",
                d: "Phone numbers",
                correct: "b"
            },
            200: {
                heading: "Which of the following is a common method used in passwordless authentication?",
                a: "Biometric authentication",
                b: "Password complexity requirements",
                c: "Secret questions",
                d: "Password hints",
                correct: "a"
            },
            300: {
                heading: "What does FIDO stand for in the context of passwordless authentication?",
                a: "Fast Identity Online",
                b: "First Identity Organization",
                c: "Free Identity Operation",
                d: "Frequent Identity Option",
                correct: "a"
            },
            400: {
                heading: "Which of the following is NOT a biometric authentication method?",
                a: "Fingerprint scanning",
                b: "Face recognition",
                c: "SMS passcode",
                d: "Iris scanning",
                correct: "c"
            },
            500: {
                heading: "Which standard is often used for passwordless authentication?",
                a: "FIDO2",
                b: "SAML",
                c: "LDAP",
                d: "OAuth",
                correct: "a"
            },
            1000: {
                heading: "Which device is commonly used for passwordless authentication via hardware tokens?",
                a: "USB security key",
                b: "Smartwatch",
                c: "External hard drive",
                d: "Bluetooth speaker",
                correct: "a"
            },
            2000: {
                heading: "What is a key benefit of passwordless authentication?",
                a: "Higher password complexity",
                b: "Reduced password resets",
                c: "Increased password sharing",
                d: "Longer password expiration times",
                correct: "b"
            },
            4000: {
                heading: "Which of these is a typical example of a passwordless authentication method?",
                a: "One-time passcodes sent via email",
                b: "Remembering complex passwords",
                c: "Security questions",
                d: "CAPTCHA challenges",
                correct: "a"
            },
            8000: {
                heading: "What is the primary purpose of a security key in passwordless authentication?",
                a: "To store passwords securely",
                b: "To provide a second factor of authentication",
                c: "To generate random passwords",
                d: "To encrypt data at rest",
                correct: "b"
            },
            16000: {
                heading: "Which of the following is an example of a passwordless authentication provider?",
                a: "AWS Lambda",
                b: "Docker",
                c: "Ansible",
                d: "Yubico",
                correct: "d"
            },

            32000: {
                heading: "Which term refers to the ability of an authentication system to recognize users based on their physical characteristics?",
                a: "Behavioral analytics",
                b: "Biometric authentication",
                c: "Token-based authentication",
                d: "Time-based authentication",
                correct: "b"
            },

            64000: {
                heading: "What is a common security risk associated with traditional password-based systems?",
                a: "Users forgetting passwords",
                b: "Password reuse across multiple sites",
                c: "Hardware malfunctions",
                d: "Software updates",
                correct: "b"
            },
            125000: {
                heading: "Which of these is NOT typically used in passwordless authentication?",
                a: "Biometrics",
                b: "SMS passcodes",
                c: "Password manager",
                d: "Hardware tokens",
                correct: "c"
            },
            250000: {
                heading: "In the context of passwordless authentication, what does the acronym 'OTP' stand for?",
                a: "One-Time Passcode",
                b: "Over-The-Phone",
                c: "Open-To-Public",
                d: "On-Time Password",
                correct: "a"
            },
            500000: {
                heading: "Which technology can enhance security by analyzing user behavior for authentication purposes?",
                a: "Biometrics",
                b: "Behavioral analytics",
                c: "CAPTCHA",
                d: "Token-based authentication",
                correct: "b"
            },
            1000000: {
                heading: "What is a key advantage of passwordless authentication over traditional password-based methods?",
                a: "Simplified user experience",
                b: "Increased password complexity",
                c: "Longer authentication times",
                d: "Greater dependency on passwords",
                correct: "a"
            }
        }
    };

    /**
     *  Setup Ui by disabling all but the current question.
     */
    const index = parent.document.URL.substring(parent.document.URL.indexOf('index='), parent.document.URL.length);

    localStorage.clear();

    if (index === "index=identity-basics") {
        localStorage.setItem("subject", "Identity Basics");
    } else if (index === "index=passwordless") {
        localStorage.setItem("subject", "Passwordless");
    } else if (index === "index=rf-communications") {
        localStorage.setItem("subject", "RF Communications");
    } else if (index === "index=modulation-principles") {
        localStorage.setItem("subject", "Modulation Principles");
    }

    if (localStorage.getItem("subject") == null) {
        alert("This topic is under development, please check back soon!");
        window.location.href = "menu.html";
    }

    Object.keys(questions[localStorage.getItem("subject")]).forEach(setupUi);

    function setupUi(question) {
        if (question !== "100") {
            document.getElementById(question).classList.toggle("disabled");
            document.getElementById(question).style.animationPlayState = "paused";
        }
    }

    /**
     *  If question is clicked, display question and answers. If answer is clicked, check answer accuracy. If correct
     *  answer has been selected, all answers are repainted and disabled until user moves to next question.
     */
    document.body.addEventListener('click', function (event) {
        const element = event.target;

        if (element.classList.contains("col")) {
            event.stopPropagation()
        } else {
            element.style.animationPlayState = "paused";

            answers.forEach(resetAnswers);

            function resetAnswers(answer) {
                document.getElementById(answer).style.backgroundColor = "#F6F1E7";
                document.getElementById(answer).disabled = false;
            }

            if (element.id === "btn-quit") {
                quitGame();
            } else if (element.classList.contains("nav-link")) {
                const subject = localStorage.getItem("subject");
                const question = document.activeElement.id;

                localStorage.setItem("question", document.activeElement.id);
                localStorage.setItem("correctAnswer", questions[subject][question]["correct"]);

                document.getElementById('subject').textContent = questions[subject][question]["heading"];
                document.getElementById('a').textContent = questions[subject][question]["a"];
                document.getElementById('b').textContent = questions[subject][question]["b"];
                document.getElementById('c').textContent = questions[subject][question]["c"];
                document.getElementById('d').textContent = questions[subject][question]["d"];
            } else if (element.classList.contains("btn-primary")) {
                checkAnswer(localStorage.getItem("subject"), localStorage.getItem("question"));
            }
        }
    });

    /**
     *  Check answer against dictionary value.
     */
    function checkAnswer(subject, question) {
        const selected = document.activeElement.id;

        if (selected === questions[subject][question]["correct"]) {
            const value = document.getElementById(question);
            const selected = document.activeElement.id

            value.style.color = "#0be881";
            value.classList.toggle("disabled");

            answers.forEach(changeColor);

            function changeColor(answer) {
                document.getElementById(answer).disabled = true;

                if (answer === selected) {
                    document.getElementById(answer).style.backgroundColor = "rgba(11, 232, 129, 75%)";
                } else {
                    document.getElementById(answer).style.backgroundColor = "rgba(255, 63, 52, 75%)";
                }
            }

            toggleElement(value)
        } else {
            window.location.href = "game-over.html";
        }
    }

    /**
     *  Change style of current element and enable next question.
     */
    function toggleElement(value) {
        switch (value.id) {
            case "100":
                document.getElementById("200").classList.toggle("disabled");
                document.getElementById("200").style.animationPlayState = "running";
                break;
            case "200":
                document.getElementById("300").classList.toggle("disabled");
                document.getElementById("300").style.animationPlayState = "running";
                break;
            case "300":
                document.getElementById("400").classList.toggle("disabled");
                document.getElementById("400").style.animationPlayState = "running";
                break;
            case "400":
                document.getElementById("500").classList.toggle("disabled");
                document.getElementById("500").style.animationPlayState = "running";
                break;
            case "500":
                document.getElementById("1000").classList.toggle("disabled");
                document.getElementById("1000").style.animationPlayState = "running";
                break;
            case "1000":
                document.getElementById("2000").classList.toggle("disabled");
                document.getElementById("2000").style.animationPlayState = "running";
                break;
            case "2000":
                document.getElementById("4000").classList.toggle("disabled");
                document.getElementById("4000").style.animationPlayState = "running";
                break;
            case "4000":
                document.getElementById("8000").classList.toggle("disabled");
                document.getElementById("8000").style.animationPlayState = "running";
                break;
            case "8000":
                document.getElementById("16000").classList.toggle("disabled");
                document.getElementById("16000").style.animationPlayState = "running";
                break;
            case "16000":
                document.getElementById("32000").classList.toggle("disabled");
                document.getElementById("32000").style.animationPlayState = "running";
                break;
            case "32000":
                document.getElementById("64000").classList.toggle("disabled");
                document.getElementById("64000").style.animationPlayState = "running";
                break;
            case "64000":
                document.getElementById("125000").classList.toggle("disabled");
                document.getElementById("125000").style.animationPlayState = "running";
                break;
            case "125000":
                document.getElementById("250000").classList.toggle("disabled");
                document.getElementById("250000").style.animationPlayState = "running";
                break;
            case "250000":
                document.getElementById("500000").classList.toggle("disabled");
                document.getElementById("500000").style.animationPlayState = "running";
                break;
            case "500000":
                document.getElementById("1000000").classList.toggle("disabled");
                document.getElementById("1000000").style.animationPlayState = "running";
                break;
            case "1000000":
                alert("Hooray, you won!");
                window.location = "index.html";
                break;
        }
    }

    /**
     *  Prompt user before exiting game.
     */
    function quitGame() {
        const choice = confirm("Are you sure you want to leave this page?");

        if (choice === true) {
            window.location = "index.html";
        }
    }
}
