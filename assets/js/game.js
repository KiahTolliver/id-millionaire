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

        "RF Communications": {
            100: {
                heading: "Any transmission, emission, or reception of signs, signals, writings, images, or sounds.",
                a: "Telecommunications",
                b: "Broadcast",
                c: "Calibration",
                d: "Telemetry",
                correct: "a"
            },
            200: {
                heading: "What are the two types of electrical communications?",
                a: "Radio and wire",
                b: "Television and wire",
                c: "Telegraph and radio",
                d: "Television and radio",
                correct: "a"
            },
            300: {
                heading: "RTTY stand for what?",
                a: "radio techtypewriter",
                b: "radar teletypewriter",
                c: "radio teletypewriter",
                d: "radar telemetry and targeting",
                correct: "c"
            },
            400: {
                heading: "Radiotelegraph transmissions are referred to as continuous wave (cw) telegraphy. CW is valuable when communicating to, from, and among widely separated naval units. What is the main advantage of the CW mode?",
                a: "Cost",
                b: "Speed",
                c: "Security",
                d: "Reliability",
                correct: "d"
            },
            500: {
                heading: "Tactical communications is usually considered as line-of-sight. What maximum distance is normally within the line-of-sight range?",
                a: "5 miles",
                b: "25 miles",
                c: "50 miles",
                d: "250 miles",
                correct: "b"
            },
            1000: {
                heading: "Navy use of the low-frequency band is mainly for which, if any, of the following broadcasts?",
                a: "Ship to shore",
                b: "Fleet multichannel",
                c: "Space vehicle telemetry",
                d: "None of the above",
                correct: "b"
            },
            2000: {
                heading: "VLF transmitters are used primarily for which of the following purposes?",
                a: "Navigation and fleet communications",
                b: "Frequency standards and time signals",
                c: "Astronomy and oscillator calibration",
                d: "Aircraft control and space vehicle tracking",
                correct: "a"
            },
            4000: {
                heading: "HF communications over long-distance trunks, or links between fixed terminals are examples of which of the following types of systems?",
                a: "Fleet broadcast",
                b: "Point-to-point",
                c: "Ground-to-air",
                d: "Ship-to-shore",
                correct: "b"
            },
            8000: {
                heading: "The method for transmitting and receiving still images. These images can be maps, photographs, and handwritten or printed text.",
                a: "Facsimile",
                b: "Fading",
                c: "Framing",
                d: "Frequency Synthesizer",
                correct: "a"
            },
            16000: {
                heading: "Normally the transmission range of VHF is limited to line of sight. What technique is used to increase this range?",
                a: "Tropospheric scatter",
                b: "Atmospheric diversity",
                c: "Ionospheric maneuvering",
                d: "Each of the above",
                correct: "a"
            },

            32000: {
                heading: "A method of operation in which telecommunications between stations takes place simultaneously in both directions using two separate frequencies.",
                a: "Half-duplex",
                b: "Semi-duplex ",
                c: "Full-duplex",
                d: "Broadcast",
                correct: "c"
            },

            64000: {
                heading: "Which of the following switched networks extends tactical voice to shore based operational commands?",
                a: "NORATS",
                b: "AUTOVON",
                c: "AUTODIN",
                d: "AUTOSEVOCOM",
                correct: "a"
            },
            125000: {
                heading: "Sending a message on several frequencies at once is an example of which of the following transmission types?",
                a: "Time-diversity",
                b: "Phase-diversity",
                c: "Distance-diversity",
                d: "Frequency-diversity",
                correct: "d"
            },
            250000: {
                heading: "A CW transmitter must contain which of the following components?",
                a: "A traveling-wave tube",
                b: "A demodulator",
                c: "A combiner",
                d: "A keyer",
                correct: "d"
            },
            500000: {
                heading: "The process of heterodyning takes place in which of the following receiver circuits?",
                a: "Mixer",
                b: "Comparator",
                c: "Oscillator",
                d: "Second IF amplifier",
                correct: "a"
            },
            1000000: {
                heading: "Two or more circuits within a receiver are varied by a single control, through which of the following processes?",
                a: "Frequency synthesis",
                b: "Automatic gain control",
                c: "Automatic frequency control",
                d: "Ganged tuning",
                correct: "d"
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
    } else if (index === "index=radar-principles") {
        localStorage.setItem("subject", "Radar Principles");
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
                document.getElementById(answer).style.backgroundColor = "rgba(30, 39, 46, 75%)";
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
